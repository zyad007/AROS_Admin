import axios from 'axios';
import validator from 'validator';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all the fields');
    } else if (!validator.isEmail(email)) {
      setError('Please enter a valid email address');
    }

    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password
      });

      const { user, token } = response.data;

      // Save the token in local storage
      localStorage.setItem('token', token);

      navigate('/home');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('An unknown error occurred. Please try again');
      }
    }
  };

  const handleForgotPasswordClick = () => {
    alert('This option is not available yet. Please create a new account!');
  };

  return (
    <div className="bg-cover bg-center w-screen h-screen flex items-center justify-center" style={{ backgroundImage: `url("../public/background.jpg")` }}>


      <div className="w-full max-w-md rounded-lg overflow-hidden p-2 shadow-lg backdrop-blur-3xl">
        <div className='bg-slate-800 rounded-lg p-10'>
          <div className="flex justify-center items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-full mr-2" />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full placeholder-white bg-transparent border-b border-gray-400 text-white py-2 px-1 focus:border-indigo-500 focus:outline-none input-field"
                required
              />
              <button
                type="button"
                onClick={handleForgotPasswordClick}
                className="text-sm text-gray-300 hover:text-white mt-1 focus:outline-none"
              >
                Forgot Password?
              </button>
            </div>
            {error && <p className="text-red-500 text-xs italic box-border m-2">{error}</p>}
            <div className="mt-6">
              <button
                type="submit"
                style={{
                  backdropFilter: 'blur(2px)',
                  transition: 'background-color 0.5s ease',
                }}
                className="w-full py-3 px-6 border border-white rounded-md shadow-sm text-white bg-transparent hover:bg-indigo-500 hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
              <div className="w-full h-0.5 bg-white mt-4"></div>
            </div>
          </form>
          <div className="flex justify-center items-center mt-4">
            <span className="text-white mr-2">Don't have an account?</span>
            <Link to="/signup" className="text-indigo-500 border-b border-white hover:border-indigo-500">Sign up</Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Login;
