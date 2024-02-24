import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {

    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const nav = useNavigate();


    return (
        <div className='flex flex-col justify-start pt-10 items-center h-screen w-screen bg-gradient-to-br from-blue-700 background-animate-1 via-slate-800 to-blue-950 text-white'>

            <div className='mb-5 text-xl flex flex-col justify-center items-center'>
                <img src="../../../images/logo2.png" alt="" className='w-20 mb-6' />
                <span>Sign in to AROS</span>
            </div>

            {
                error &&
                <div className='relative flex mt-4 border border-red-700 w-80 h-16 justify-center items-center rounded-md bg-opacity-25 bg-red-500 my-5'>
                    <span className='text-sm'>{'Error'}</span>
                    <div className='flex justify-center items-center h-3.5 w-3.5 pb-[0.2rem] hover:cursor-pointer hover:bg-slate-700 absolute right-3 font-semibold border border-white'
                        onClick={() => {
                        }}
                    >x</div>
                </div>
            }

            <div className='flex flex-col justify-center items-center border w-80  mt-35 p-5 rounded-md bg-secondary-2 '>

                <div className='w-full'>
                    <div><span className='text-sm ml-1'>Email</span></div>
                    <input className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 ' type='text' name='email' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            login()
                        }
                    }}></input>
                </div>

                <div className='w-full my-3'>
                    <div><span className='text-sm ml-1'>Password</span></div>
                    <input className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary' type='password' name='password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                        }
                    }}></input>
                </div>

                <div className='w-full'>
                    <button className="w-full h-9 rounded-md border text-sm bg-primary-2 text-white hover:bg-primary-1">Sign In</button>
                </div>

            </div>

            <div className='flex mt-4 border w-80 h-16 justify-center items-center rounded-md bg-opacity-5 bg-white'>
                <span className='text-sm'>Don't Have an Account? <Link text="Signup" onClick={() => nav("/signup")} /></span>
            </div>

        </div>
    )
}
