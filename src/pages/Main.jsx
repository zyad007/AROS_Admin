import React, { useState } from 'react';
import Map from '../components/map';
import 'maplibre-gl/dist/maplibre-gl.css';

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
      <div className='w-5% m-5'>
        <select onChange={handleCityChange} value={selectedCity}>
          <option value="">Select a city</option>
          {egyptCities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className='h-full w-full border border-black border-solid rounded-[25px]'>
        <Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />
      </div>
    </div>
  );
};
