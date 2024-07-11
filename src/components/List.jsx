import React, { useEffect, useState } from 'react';
import LiveLocationMap from './LiveLocationMap';

export default function List({ obstacles, handleSolve }) {
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    setSelectedLocation({location: { lat: 30.128611, lng: 31.242222 }})
  }, []);

  const handleShowMap = (location) => {
    setSelectedLocation(location);
    setShowMapPopup(true);
  };

  const handleCloseMap = () => {
    setShowMapPopup(false);
    setSelectedLocation(null);
  };

  return (
    <div className="max-h-[550px] overflow-y-auto relative">
      <table className="min-w-full divide-y divide-gray-300">
        <thead className="bg-gray-200 sticky top-0">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No of Reports</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {obstacles.map((obstacle, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{obstacle.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className='flex justify-between mt-4'>
                  <button
                    className='bg-blue-500 text-white p-2 rounded-md'
                    onClick={() => handleShowMap(obstacle.location)}
                  >
                    View Location
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 justify-center content-center">{obstacle.reports}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 m-2 rounded"
                  onClick={() => handleSolve(obstacle)}
                >
                  Solve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showMapPopup && (
        <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
          <div className='bg-white rounded-md p-4 w-full max-w-lg'>
            <h3 className='text-lg font-bold mb-4'>Live Location</h3>
            {selectedLocation && (
              <div className='w-full h-64'>
                <LiveLocationMap location={selectedLocation} />
              </div>
            )}
            <button
              className='bg-blue-500 text-white p-2 rounded-md mt-4'
              onClick={handleCloseMap}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
