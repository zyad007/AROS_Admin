import React, { useState } from 'react';
import Map from '../components/map';
import DropdownMenu from '../components/DropDownMenu';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Route, Routes } from 'react-router-dom';

export default function Main() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRoad, setSelectedRoad] = useState('');
  const [selectedObstacleType, setSelectedObstacleType] = useState('');

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

  const egyptCities = ['Cairo', 'Alex', 'Sharm', 'Gouna'];
  const regions = ['Region 1', 'Region 2', 'Region 3'];
  const roads = ['Road 1', 'Road 2', 'Road 3'];
  const obstacleTypes = ['Accident', 'Road Obstacle', 'Traffic Jam'];

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleRoadChange = (event) => {
    setSelectedRoad(event.target.value);
  };

  const handleObstacleTypeChange = (event) => {
    setSelectedObstacleType(event.target.value);
  };

  const handleSearch = () => {
    console.log('Selected Region:', selectedRegion);
    console.log('Selected City:', selectedCity);
    console.log('Selected Road:', selectedRoad);
    console.log('Selected Obstacle Type:', selectedObstacleType);
  };

  return (
    <div className='flex h-full w-full'>
      <div className='w-[30%] m-2 border-2 flex flex-col justify-center items-center'>
        <DropdownMenu placeholder={'Select Region'} options={regions} value={selectedRegion} onChange={handleRegionChange} />
        <DropdownMenu placeholder={'Select City'} options={egyptCities} value={selectedCity} onChange={handleCityChange} />
        <DropdownMenu placeholder={'Select Road'} options={roads} value={selectedRoad} onChange={handleRoadChange} />
        <DropdownMenu placeholder={'Select Obstacle Type'} options={obstacleTypes} value={selectedObstacleType} onChange={handleObstacleTypeChange} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 m-4 border border-blue-700 rounded"
          onClick={handleSearch}
        >
          Search
        </button>

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
          <Routes>
            <Route index element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
            <Route path='/heat-map' element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
