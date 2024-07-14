import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();

  const sidebarLinks = [
    { path: '/home', content: 'Obstacles View', icon: '/icons/obstacles.png' },
    { path: '/user-tracking', content: 'User Tracking', icon: '/icons/user_tracking.png' },
    { path: '/admin-management', content: 'Admin Management', icon: '/icons/admin.png' },
    { path: '/add-obstacle', content: 'Add Obstacle', icon: '/icons/add_obstacle.png' },
    { path: '/add-new-member', content: 'add new member', icon: '/icons/add_new-member.png'}
  ];

  return (
    <div className='bg-[#101A33] w-[20%] relative'>
      <div className='bg-[#1A2342] text-center select-none py-3'>
        <img src="/logo.png" alt="AROS Logo" className="w-28 h-auto mx-auto" />
      </div>
      <div className='flex flex-col font-Sansation_Light_Italic text-white py-3 text-sm'>
        {sidebarLinks.map((link, index) => (
          <SidebarLink key={index} path={link.path} content={link.content} icon={link.icon} isActive={location.pathname === link.path} />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 px-4 py-6 mt-auto flex items-center">
        <img src="/Bichoy.png" alt="User Avatar" className="w-14 h-14 rounded-full mr-2" />
        <div className="flex flex-col">
          <span className="text-s text-white font-Sansation_Light_Italic">Bichoy Atef</span>
          <span className="text-s text-white font-Sansation_Light_Italic">Admin</span>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ path, content, icon, isActive }) {
  return (
    <Link to={path} className={`h-10 flex justify-start items-center space-x-3 pl-[10%] transition duration-300 ease-in-out ${isActive ? 'bg-[#1A2342] text-white shadow-md' : 'hover:bg-[#1A2342] hover:text-white hover:shadow-md'}`}>
      <img className='w-6 h-6' src={icon} alt={content} />
      <span className={`text-white font-Sansation_Light_Italic ${isActive ? 'font-bold' : ''}`}>{content}</span>
    </Link>
  );
};

