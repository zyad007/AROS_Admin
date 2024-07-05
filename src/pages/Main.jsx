import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Map from '../components/Map';
import DropdownMenu from '../components/DropDownMenu';
import List from '../components/List';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Route, Routes } from 'react-router-dom';

export default function Main() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedRoad, setSelectedRoad] = useState('');
  const [selectedObstacleType, setSelectedObstacleType] = useState('');
  const [view, setView] = useState('map');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      // // Fetch obstacles data
      // axios.get('http://localhost:3000/obstacles', {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      //   .then(response => {
      //     setObstacles(response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching obstacle data:', error);
      //   });
    }
  }, [navigate]);

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
      description: 'Accident occurred here'
    }, {
      lat: 27.9,
      lon: 31.4,
      type: 'accident',
      imageURL: 'accident2.jpg',
      description: 'Accident occurred here',
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

  const switchToMapView = () => {
    setView('map');
  };

  const switchToListView = () => {
    setView('list');
  };

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='w-[20%] m-2 border-2 flex flex-col justify-center items-center'>
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
          <button className='bg-[#1A2342] border border-[#101A33] w-full mt-2 rounded-t-md flex justify-center items-center'
            onClick={switchToMapView}>
            Map View
          </button>
          <button className='bg-[#223066] border border-[#101A33] w-full mt-2 rounded-t-md flex justify-center items-center'
            onClick={switchToListView}>
            List View
          </button>
        </div>
        <div className='w-full h-full border rounded-md border-[#101A33] bg-[#1A2342] p-2 border-t-0 rounded-t-none'>
          {view === 'map' ? (
            <Routes>
              <Route index element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
              <Route path='/heat-map' element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
            </Routes>
          ) : (
            <List obstacles={obstacles} />
          )}
        </div>
      </div>
    </div>
  );
};