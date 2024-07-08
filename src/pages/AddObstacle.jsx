import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function AddObstacle() {
  const [view, setView] = useState('add');
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [road, setRoad] = useState('');
  const [locationInfo, setLocationInfo] = useState('');
  const [obstacles, setObstacles] = useState([
    {
      id: 1,
      type: 'accident',
      region: 'Cairo',
      city: 'Nasr City',
      road: 'Abbas El Akkad St',
      solved: false
    },
    {
      id: 2,
      type: 'accident',
      region: 'Giza',
      city: '6th of October',
      road: 'El Mehwar St',
      solved: false
    }
  ]);

  const handleSwitchToAdd = () => {
    setView('add');
  };

  const handleSwitchToList = () => {
    setView('list');
  };

  const handleSolve = (id) => {
    const updatedObstacles = obstacles.map(obstacle =>
      obstacle.id === id ? { ...obstacle, solved: true } : obstacle
    );
    setObstacles(updatedObstacles);
  };

  const handleDelete = (id) => {
    const updatedObstacles = obstacles.filter(obstacle => obstacle.id !== id);
    setObstacles(updatedObstacles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObstacle = {
      id: obstacles.length + 1,
      type: 'accident',
      region,
      city,
      road,
      solved: false
    };
    setObstacles([...obstacles, newObstacle]);
    setRegion('');
    setCity('');
    setRoad('');
    setLocationInfo('');
    setView('list'); // Switch to the list view after submitting
  };

  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='flex flex-col w-full p-4 bg-[#FFF]'>
        <div className='flex justify-between items-center mb-4'>
          <button
            className={`py-2 px-6 rounded-md ${view === 'add' ? 'bg-blue-500 text-white' : 'bg-[#1A2342] text-gray-200 hover:bg-blue-500 hover:text-white'} border border-[#101A33]`}
            onClick={handleSwitchToAdd}
          >
            Add New Obstacle
          </button>
          <button
            className={`py-2 px-6 rounded-md ${view === 'list' ? 'bg-blue-500 text-white' : 'bg-[#1A2342] text-gray-200 hover:bg-blue-500 hover:text-white'} border border-[#101A33]`}
            onClick={handleSwitchToList}
          >
            View All Obstacles
          </button>
        </div>
        <div className='flex flex-grow items-center justify-center'>
          {view === 'add' && (
            <div className='bg-blue-700 flex flex-col justify-center items-center rounded-md p-4 max-w-lg w-full h-[500px] mt-4'>
              <h2 className='text-white text-lg font-bold mb-4'>Add New Obstacle</h2>
              <form className='w-full' onSubmit={handleSubmit}>
                <div className='mb-4'>
                  <label className='block text-white mb-1' htmlFor='region'>Region</label>
                  <select
                    id='region'
                    className='w-full p-2 rounded-md bg-white text-black'
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                  >
                    <option value=''>Select a region</option>
                    <option value='Cairo'>Cairo</option>
                    <option value='Giza'>Giza</option>
                    <option value='Alexandria'>Alexandria</option>
                    <option value='Aswan'>Aswan</option>
                    <option value='Luxor'>Luxor</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-white mb-1' htmlFor='city'>City</label>
                  <select
                    id='city'
                    className='w-full p-2 rounded-md bg-white text-black'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option value=''>Select a city</option>
                    <option value='Nasr City'>Nasr City</option>
                    <option value='Maadi'>Maadi</option>
                    <option value='Heliopolis'>Heliopolis</option>
                    <option value='6th of October'>6th of October</option>
                    <option value='Zamalek'>Zamalek</option>
                  </select>
                </div>
                <div className='mb-4'>
                  <label className='block text-white mb-1' htmlFor='road'>Road</label>
                  <input
                    id='road'
                    type='text'
                    className='w-full p-2 rounded-md bg-white text-black'
                    value={road}
                    onChange={(e) => setRoad(e.target.value)}
                    placeholder='Enter road name'
                  />
                </div>
                <div className='mb-4'>
                  <label className='block text-white mb-1' htmlFor='locationInfo'>Additional Info</label>
                  <input
                    id='locationInfo'
                    type='text'
                    className='w-full p-2 rounded-md bg-white text-black'
                    value={locationInfo}
                    onChange={(e) => setLocationInfo(e.target.value)}
                    placeholder='Enter additional information'
                  />
                </div>
                <button
                  type='submit'
                  className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full'
                >
                  Submit
                </button>
              </form>
            </div>
          )}
          {view === 'list' && (
            <div className='bg-blue-700 flex flex-col justify-start items-center rounded-md p-4 max-w-lg w-full h-[500px] mt-4'>
              <h2 className='text-white text-lg font-bold mb-2'>View All Obstacles</h2>
              <table className='w-full text-white'>
                <thead>
                  <tr className='border-b-2 border-gray-300'>
                    <th className='px-4 py-2 font-bold'>Type</th>
                    <th className='px-4 py-2 font-bold'>Region</th>
                    <th className='px-4 py-2 font-bold'>City</th>
                    <th className='px-4 py-2 font-bold'>Road</th>
                    <th className='px-4 py-2 font-bold'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {obstacles.map(obstacle => (
                    <tr key={obstacle.id} className='border-b border-gray-300'>
                      <td className='px-4 py-2'>{obstacle.type}</td>
                      <td className='px-4 py-2'>{obstacle.region}</td>
                      <td className='px-4 py-2'>{obstacle.city}</td>
                      <td className='px-4 py-2'>{obstacle.road}</td>
                      <td className='px-4 py-2 flex gap-2'>
                        {!obstacle.solved ? (
                          <button
                            className='bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600'
                            onClick={() => handleSolve(obstacle.id)}
                          >
                            Solve
                          </button>
                        ) : (
                          <button
                            className='bg-gray-500 text-white py-1 px-3 rounded-md cursor-not-allowed'
                            disabled
                          >
                            Solved
                          </button>
                        )}
                        <button
                          className='bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600'
                          onClick={() => handleDelete(obstacle.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};