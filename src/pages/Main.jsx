import React, { useState } from 'react';
import Map from '../components/map';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

export default function Main() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [selectedCity, setSelectedCity] = useState(''); // Initialize to an empty string

  const obstacles = [
    {
      lat: 26.9,
      lon: 30.4,
      type: 'accident',
      imageURL: 'accident1.jpeg',
      description: 'Accident occurred here'
    }, {
      lat: 27.9,
      lon: 31.4,
      type: 'accident',
      imageURL: 'accident2.jpg',
      description: 'Accident occurred here'
    }, {
      lat: 28.9,
      lon: 32.4,
      type: 'Road obstacles',
      imageURL: 'obstacle1.jpeg',
      description: 'Road obstacle here'
    }, {
      lat: 29.9,
      lon: 33.4,
      type: 'Road obstacles',
      imageURL: 'obstacle2.jpeg',
      description: 'Road obstacle here'
    }, {
      lat: 30.9,
      lon: 34.4,
      type: 'traffic jam',
      imageURL: 'traffic jam.jpg',
      description: 'Traffic jam here'
    }
  ];

  const egyptCities = ['cairo', 'alex', 'sharm', 'gouna'];

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className='flex h-full w-full'>

      <div className='w-[30%] m-2 border-2 flex justify-center items-center'>
        <select onChange={handleCityChange} value={selectedCity}>
          <option value="">Select a city</option>
          {egyptCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div className='flex flex-col w-full pb-2 pr-2'>
          
        <div className='w-full h-[10%] flex justify-stretch items-stretch space-x-2 text-white'>
            <div className='select-none bg-[#1A2342] border border-[#101A33] border-b-0 w-full mt-2 rounded-t-md flex justify-center items-center'>
              Basic Map
            </div>
            <div className='select-none bg-[#223066] border border-[#101A33] w-full mt-2 rounded-t-md flex justify-center items-center'>
              Heat Map
            </div>
        </div>

        <div className='w-full h-full border rounded-md border-[#101A33] bg-[#1A2342] p-2 border-t-0 rounded-t-none'>
          <Routes >
            <Route index element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
            <Route path='/heat-map' element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
          </Routes>
        </div>
      </div>

    </div>
  );
};
