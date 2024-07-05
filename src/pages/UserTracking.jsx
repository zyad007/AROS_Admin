import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Route, Routes } from 'react-router-dom';

export default function UserTracking() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  }, [navigate]);

  const obstacles = [
    {
      lat: 26.9,
      lon: 30.4,
      type: 'userCar',
    }, {
      lat: 27.9,
      lon: 31.4,
      type: 'userCar',
    }, {
      lat: 27.9,
      lon: 31.4,
      type: 'userCar',
    }
  ];

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='flex flex-col w-full pb-2 pr-2'>
        <div className='w-full h-full bg-[#1A2342] p-2'>
          <Routes>
            <Route index element={<Map obstacles={obstacles} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};