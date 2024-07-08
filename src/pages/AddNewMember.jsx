import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function AdminManagement() {

  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='w-full'>
        <div className='flex flex-grow items-center justify-center'>
          <div className='bg-blue-700 justify-start items-center rounded-md p-4 max-w-lg w-full h-full mt-4 text-white'>
            Enter Car Liscience plate
          </div>
        </div>
      </div>
    </div>
  );
};