import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function AdminManagement() {
  const [showAdminForm, setShowAdminForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showUserDataModal, setShowUserDataModal] = useState(false);
  const [showAdminDataModal, setShowAdminDataModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);

  const handleAdminRegister = () => {
    setShowAdminForm(true);
    setShowUserForm(false);
  };

  const handleUserRegister = () => {
    setShowUserForm(true);
    setShowAdminForm(false);
  };

  const handleAddAdmin = (e) => {
    e.preventDefault();
    const newAdmin = {
      id: admins.length + 1,
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };
    setAdmins([...admins, newAdmin]);
    setShowAdminForm(false);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: users.length + 1,
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      licensePlate: e.target.licensePlate.value,
      carId: e.target.carId.value,
    };
    setUsers([...users, newUser]);
    setShowUserForm(false);
  };

  const UserDataModal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md max-w-3xl w-full">
          <h2 className="text-2xl mb-4 text-center">User Data</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Phone</th>
                <th className="border px-4 py-2">Address</th>
                <th className="border px-4 py-2">License Plate</th>
                <th className="border px-4 py-2">Car ID</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="text-center">
                  <td className="border px-4 py-2">{user.id}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">{user.address}</td>
                  <td className="border px-4 py-2">{user.licensePlate}</td>
                  <td className="border px-4 py-2">{user.carId}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded mt-4"
            onClick={() => setShowUserDataModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const AdminDataModal = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded-md max-w-3xl w-full">
          <h2 className="text-2xl mb-2 text-center">Admin Data</h2>
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin.id} className="text-center">
                  <td className="border px-4 py-2">{admin.id}</td>
                  <td className="border px-4 py-2">{admin.name}</td>
                  <td className="border px-4 py-2">{admin.email}</td>
                  <td className="border px-4 py-2">{admin.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded mt-4"
            onClick={() => setShowAdminDataModal(false)}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="w-full p-6">
        <div className="flex flex-grow items-center justify-center">
          <div className="flex justify-start items-center rounded-md p-6 max-w-lg w-full h-full text-white">
            <div className="flex space-x-4">
              <button
                className={`bg-gray-800 text-white px-6 py-2 rounded-lg ${showUserForm ? 'bg-green-500' : ''}`}
                onClick={handleUserRegister}
              >
                Register New User
              </button>
              <button
                className={`bg-gray-800 text-white px-6 py-2 rounded-lg ${showAdminForm ? 'bg-red-600' : ''}`}
                onClick={handleAdminRegister}
              >
                Register New Admin
              </button>
              <button
                className="bg-blue-800 text-white px-6 py-2 rounded-lg"
                onClick={() => setShowUserDataModal(true)}
              >
                Show All Users
              </button>
              <button
                className="bg-blue-800 text-white px-6 py-2 rounded-lg"
                onClick={() => setShowAdminDataModal(true)}
              >
                Show All Admins
              </button>
            </div>
          </div>
        </div>
        {showAdminForm && (
          <div className="flex justify-center items-center">
            <div className="bg-white text-black p-6 mt-2 rounded-md max-w-xl w-full shadow-lg">
              <h2 className="text-2xl mb-4 text-center">Admin Registration</h2>
              <form onSubmit={handleAddAdmin}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                    Add Admin
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showUserForm && (
          <div className="flex justify-center items-center">
            <div className="bg-white text-black p-6 mt-10 rounded-md max-w-xl w-full shadow-lg">
              <h2 className="text-2xl mb-4 text-center">User Registration</h2>
              <form onSubmit={handleAddUser}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="licensePlate"
                    placeholder="License Plate"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="carId"
                    placeholder="Car ID"
                    className="bg-gray-100 text-center text-black px-4 py-3 rounded-lg w-full"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="bg-green-500 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
                    Add User
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showUserDataModal && <UserDataModal />}
        {showAdminDataModal && <AdminDataModal />}
      </div>
    </div>
  );
}
