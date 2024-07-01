import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='bg-[#101A33] w-[15%] relative'>
      <div className='bg-[#1A2342] text-center font-Sansation_Light_Italic text-4xl text-white select-none py-3'>
        AROS
      </div>

      <div className='flex flex-col font-Sansation_Light_Italic text-white py-3 text-sm'>
        <SidebarLink path='/' content='Dashboard' icon='/icons/apps.png' />
        <SidebarLink path='/' content='Obstacles Detection' />
      </div>

      {/* User Section */}
      <div className="absolute bottom-0 left-0 right-0 px-4 py-6 mt-auto flex items-center">
        <img src="/Bichoy.png" alt="User Avatar" className="w-14 h-14 rounded-full mr-2" /> {/* Increased image size */}
        <div className="flex flex-col">
          <span className="text-s text-white font-Sansation_Light_Italic">Bichoy Atef</span>
          <span className="text-s text-white font-Sansation_Light_Italic">Admin</span>
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ path = '/', content = 'None', icon = '/icons/apps.png' }) {
  return (
    <Link to={path} className='h-7 flex justify-start items-center space-x-2 pl-[10%] hover:bg-[#1A2342]'>
      <img className='w-[20px] h-[20px]' src={icon} alt={content} />
      <span className="text-white font-Sansation_Light_Italic">{content}</span>
    </Link>
  );
}
