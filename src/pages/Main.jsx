import axios from 'axios';
import React from 'react';
import Map from '../components/Map';
import List from '../components/List';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

const obstacles = [
  {
    lat: 30.128611, // Shoubra
    lon: 31.242222,
    type: 'accident',
    imageURL: 'accident1.jpeg',
    time: '2024-07-08T10:00:00Z',
    reports: 5
  },
  {
    lat: 30.0566104, // Nasr City
    lon: 31.3301076,
    type: 'Road obstacles',
    imageURL: 'obstacle1.jpeg',
    time: '2024-07-07T08:00:00Z',
    reports: 2
  },
  {
    lat: 29.85, // Estimated Helwan
    lon: 31.25,
    type: 'Road obstacles',
    imageURL: 'obstacle2.jpeg',
    time: '2024-07-06T09:00:00Z',
    reports: 8
  },
  {
    lat: 30.0444, // Downtown
    lon: 31.2357,
    type: 'traffic jam',
    imageURL: 'traffic jam.jpg',
    time: '2024-07-05T11:00:00Z',
    reports: 3
  },
];

export default function Main() {
  const navigate = useNavigate();
  const [view, setView] = useState('map');
  const [sortBy, setSortBy] = useState('latest');
  const [popupInfo, setPopupInfo] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    } else {
      console.log('Token:', token);
      // axios.get('https://aros-server-new.onrender.com/obstacle', {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      //   .then(response => {
      //     console.log('Obstacle data:', response.data);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching obstacle data:', error);
      //   });
    }
  }, [navigate]);

  const switchToMapView = () => {
    setView('map');
  };

  const switchToListView = () => {
    setView('list');
  };

  const handleSortByLatest = () => {
    setSortBy('latest');
  };

  const handleSortByReports = () => {
    setSortBy('reports');
  };

  const sortedObstacles = () => {
    if (sortBy === 'latest') {
      return [...obstacles].sort((a, b) => new Date(b.time) - new Date(a.time));
    }
    if (sortBy === 'reports') {
      return [...obstacles].sort((a, b) => b.reports - a.reports);
    }
    return obstacles;
  };

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='flex flex-col w-full pb-2 pr-2 '>
        <div className='w-[98%] h-[10%] flex justify-stretch items-stretch space-x-2 text-white mr-2 ml-4'>
          <button
            className={`w-full mt-2 rounded-t-md flex justify-center items-center ${view === 'map' ? 'bg-[#1A2342] border border-[#101A33]' : 'bg-[#223066] border border-[#101A33]'
              }`}
            onClick={switchToMapView}
          >
            Map View
          </button>
          <button
            className={`w-full mt-2 rounded-t-md flex justify-center items-center ${view === 'list' ? 'bg-[#1A2342] border border-[#101A33]' : 'bg-[#223066] border border-[#101A33]'
              }`}
            onClick={switchToListView}
          >
            List View
          </button>
        </div>
        <div className='w-[98%] h-full border rounded-md border-[#101A33] bg-[#1A2342] p-2 border-t-0 rounded-t-none mr-2 ml-4'>
          {view === 'map' ? (
            <Routes>
              <Route index element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
              <Route path='/heat-map' element={<Map obstacles={obstacles} setPopupInfo={setPopupInfo} popupInfo={popupInfo} />} />
            </Routes>
          ) : (
            <div>
              <div className='flex justify-between p-4 space-x-4'>
                <button
                  className={`py-2 px-4 w-full rounded font-bold text-white ${sortBy === 'latest' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-700'
                    }`}
                  onClick={handleSortByLatest}
                >
                  Sort Obstacles by Latest Time
                </button>
                <button
                  className={`py-2 px-4 w-full rounded font-bold text-white ${sortBy === 'reports' ? 'bg-yellow-700' : 'bg-yellow-500 hover:bg-yellow-700'
                    }`}
                  onClick={handleSortByReports}
                >
                  Sort Obstacles by Number of Reports
                </button>
              </div>
              <List obstacles={sortedObstacles()} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};