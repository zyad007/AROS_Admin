import React, { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';

export default function AdminManagement() {
  const [plateNumber, setPlateNumber] = useState('');
  const [letter1, setLetter1] = useState('');
  const [letter2, setLetter2] = useState('');
  const [letter3, setLetter3] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');

  const letter2Ref = useRef(null);
  const letter3Ref = useRef(null);

  const dummyData = [
    { plateNumber: '123', letters: ['ا', 'ب', 'ج'], owner: 'John Doe', ownerAddress: '123 Main St, Cairo', phoneNumber: '+20123456789', carId: 'CAR123', location: 'Nasr City', status: 'active', suspiciousActions: false },
    { plateNumber: '456', letters: ['د', 'ه', 'و'], owner: 'Jane Smith', ownerAddress: '456 Elm St, Cairo', phoneNumber: '+20234567890', carId: 'CAR456', location: 'Maadi', status: 'blocked', suspiciousActions: true }
  ];

  const obstacles = [
    { id: 1, type: 'accident', location: 'Nasr City', time: '2024-07-01 14:00', status: 'solved' },
    { id: 2, type: 'breakdown', location: 'Maadi', time: '2024-07-02 10:30', status: 'pending' },
    { id: 3, type: 'false alarm', location: 'Zamalek', time: '2024-07-03 09:15', status: 'false alarm' }
  ];

  const handleSearch = () => {
    const result = dummyData.find(
      (car) =>
        car.plateNumber === plateNumber &&
        car.letters[0] === letter1 &&
        car.letters[1] === letter2 &&
        car.letters[2] === letter3
    );
    if (result) {
      setSearchResult(result);
      setSearchError('');
    } else {
      setSearchResult(null);
      setSearchError('There is no car with this plate connected to our system. Please make sure that the plate numbers and letters are correct.');
    }
  };

  const handleShow = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleBlockToggle = () => {
    // Toggle between active and blocked status for demonstration purposes
    setSearchResult(prevResult => ({
      ...prevResult,
      status: prevResult.status === 'active' ? 'blocked' : 'active'
    }));
  };

  const handleShowAllReports = () => {
    // Logic to handle showing all reports related to the selected car
    setShowPopup(true); // For demonstration, opening the popup to show all reports
  };

  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <div className='w-full p-4'>
        <div className='flex flex-grow items-center justify-center'>
          <div className='bg-blue-700 flex flex-col justify-start items-center rounded-md p-4 max-w-lg w-full h-auto mt-4 text-white'>
            <h2 className='text-lg font-bold mb-4'>Enter Car License Plate</h2>
            <div className='w-full flex flex-col'>
              <div className='flex justify-between items-center mb-4'>
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-1/2'
                  placeholder='Enter plate number'
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value)}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-1/12 text-center'
                  placeholder='L1'
                  value={letter1}
                  onChange={(e) => {
                    setLetter1(e.target.value);
                    if (e.target.value) letter2Ref.current.focus();
                  }}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-1/12 text-center'
                  placeholder='L2'
                  ref={letter2Ref}
                  value={letter2}
                  onChange={(e) => {
                    setLetter2(e.target.value);
                    if (e.target.value) letter3Ref.current.focus();
                  }}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black mx-1 w-1/12 text-center'
                  placeholder='L3'
                  ref={letter3Ref}
                  value={letter3}
                  onChange={(e) => setLetter3(e.target.value)}
                />
              </div>
              <button
                className='bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full'
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {(searchResult || searchError) && (
          <div className='flex flex-grow items-center justify-center mt-4'>
            <div className='bg-blue-900 justify-start items-center rounded-md p-4 max-w-lg w-full h-auto text-white'>
              <h2 className='text-lg font-bold mb-4'>{searchError ? 'Not Found!!' : 'Data'}</h2>
              {searchResult ? (
                <div className='flex flex-col w-full'>
                  <div className='flex justify-between mb-4'>
                    <div>
                      <p><span className='font-bold'>Plate Number:</span> {searchResult.plateNumber}</p>
                      <p><span className='font-bold'>Letters:</span> {searchResult.letters.join(' ')}</p>
                      <p><span className='font-bold'>Owner:</span> {searchResult.owner}</p>
                      <p><span className='font-bold'>Owner Address:</span> {searchResult.ownerAddress}</p>
                      <p><span className='font-bold'>Phone Number:</span> {searchResult.phoneNumber}</p>
                    </div>
                    <div>
                      <p><span className='font-bold'>Car ID:</span> {searchResult.carId}</p>
                      <p><span className='font-bold'>Status:</span> <span className={searchResult.status === 'active' ? 'text-green-500' : searchResult.status === 'blocked' ? 'text-red-500' : 'text-yellow-500'}>{searchResult.status}</span></p>
                    </div>
                  </div>
                  <div>
                    <button
                      className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'
                      onClick={() => alert('Showing live location map')}
                    >
                      Show Live Location
                    </button>
                  </div>
                  {searchResult.suspiciousActions && (
                    <div className='mt-4'>
                      <p className='text-red-500 font-bold'>Suspicious Actions Detected!</p>
                      <p className='text-sm'>Description of suspicious activities...</p>
                    </div>
                  )}
                  <div className='mt-4'>
                    <button
                      className={searchResult.status === 'active' ? 'bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-full' : 'bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 w-full'}
                      onClick={handleBlockToggle}
                    >
                      {searchResult.status === 'active' ? 'Block User' : 'Remove Block'}
                    </button>
                  </div>
                  <div className='mt-4'>
                    <button
                      className='bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 w-full'
                      onClick={handleShowAllReports}
                    >
                      Show All Reports
                    </button>
                  </div>
                </div>
              ) : (
                <p className='text-white'>{searchError}</p>
              )}
            </div>
          </div>
        )}
      </div>

      {showPopup && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-6 rounded-md max-w-lg w-full'>
            <h2 className='text-xl font-bold mb-4'>Obstacles Detected by This Car</h2>
            <div className='text-black'>
              {obstacles.map(obstacle => (
                <div key={obstacle.id} className='mb-2'>
                  <p><span className='font-bold'>Type:</span> {obstacle.type}</p>
                  <p><span className='font-bold'>Location:</span> {obstacle.location}</p>
                  <p><span className='font-bold'>Time:</span> {obstacle.time}</p>
                  <p><span className='font-bold'>Status:</span> <span className={obstacle.status === 'solved' ? 'text-green-500' : obstacle.status === 'pending' ? 'text-yellow-500' : 'text-red-500'}>{obstacle.status}</span></p>
                </div>
              ))}
            </div>
            <button
              className='bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4'
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};