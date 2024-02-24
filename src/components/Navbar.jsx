import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-red-950 flex justify-between items-center p-4">
      {/* Dark/Light Mode Button */}
      <div>
        <button className="text-white bg-transparent border border-white rounded-md px-4 py-2 mr-4">
          Dark Mode
        </button>
        <button className="text-white bg-transparent border border-white rounded-md px-4 py-2">
          Light Mode
        </button>
      </div>
      
      {/* Notifications Dropdown */}
      <div className="relative mr-4">
        <button className="text-white bg-transparent border border-white rounded-md px-4 py-2">
          Notifications
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
          {/* Dropdown Content Here */}
        </div>
      </div>
      
      {/* Messages Dropdown */}
      <div className="relative mr-4">
        <button className="text-white bg-transparent border border-white rounded-md px-4 py-2">
          Messages
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
          {/* Dropdown Content Here */}
        </div>
      </div>
      
      {/* Profile Dropdown */}
      <div className="relative">
        <button className="text-white bg-transparent border border-white rounded-md px-4 py-2">
          Profile
        </button>
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden">
          {/* Dropdown Content Here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
