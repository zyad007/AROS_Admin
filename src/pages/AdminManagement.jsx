import React, { useState, useRef, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { FaBell } from 'react-icons/fa';
import LiveLocationMap from '../components/LiveLocationMap';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function AdminManagement() {
  const [plateNumber, setPlateNumber] = useState('');
  const [letter1, setLetter1] = useState('');
  const [letter2, setLetter2] = useState('');
  const [letter3, setLetter3] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showMapPopup, setShowMapPopup] = useState(false);
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [showNotificationPopover, setShowNotificationPopover] = useState(false);
  const [triggerSearch, setTriggerSearch] = useState(false);

  const letter1Ref = useRef(null);
  const letter2Ref = useRef(null);
  const letter3Ref = useRef(null);

  const dummyNotifications = [
    {
      title: 'Suspicious Activity Detected',
      carID: 'CAR123',
      description: 'Unauthorized access attempt detected.',
      owner: {
        phoneNumber: '+20123456789',
        address: '123 Main St, Cairo'
      },
      plateNumber: '123',
      letters: ['ا', 'ب', 'ج'],
      location: { lat: 30.0444, lng: 31.2357 } // Cairo coordinates
    },
    {
      title: 'Warning: Blocked Vehicle',
      carID: 'CAR456',
      description: 'This vehicle has been blocked due to illegal parking.',
      owner: {
        phoneNumber: '+20234567890',
        address: '456 Elm St, Cairo'
      },
      plateNumber: '456',
      letters: ['د', 'ه', 'و'],
      location: { lat: 29.9765, lng: 31.1313 } // Giza coordinates
    }
  ];

  const obstacles = [
    { id: 1, type: 'accident', location: 'Nasr City', time: '2024-07-01 14:00', status: 'solved' },
    { id: 2, type: 'breakdown', location: 'Maadi', time: '2024-07-02 10:30', status: 'pending' },
    { id: 3, type: 'false alarm', location: 'Zamalek', time: '2024-07-03 09:15', status: 'false alarm' }
  ];

  useEffect(() => {
    letter1Ref.current.focus();
  }, []);

  useEffect(() => {
    if (triggerSearch) {
      handleSearch();
      setTriggerSearch(false);
    }
  }, [triggerSearch, plateNumber, letter1, letter2, letter3]);

  const handleSearch = () => {
    const result = dummyNotifications.find(
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
    setSearchResult(prevResult => ({
      ...prevResult,
      status: prevResult.status === 'active' ? 'blocked' : 'active'
    }));
  };

  const handleShowAllReports = () => {
    setShowPopup(true);
  };

  const addNotification = (title, carID, description, ownerPhoneNumber, ownerAddress, plateNumber, letters) => {
    const newNotification = {
      title,
      carID,
      description,
      owner: {
        phoneNumber: ownerPhoneNumber,
        address: ownerAddress
      },
      plateNumber,
      letters
    };
    setNotifications([...notifications, newNotification]);
  };

  const handleLetter1Change = (e) => {
    const value = e.target.value;
    setLetter1(value);
    if (value && value.length === 1) {
      letter2Ref.current.focus();
    }
  };

  const handleLetter2Change = (e) => {
    const value = e.target.value;
    setLetter2(value);
    if (!value) {
      letter1Ref.current.focus();
    } else if (value.length === 1) {
      letter3Ref.current.focus();
    }
  };

  const handleLetter3Change = (e) => {
    const value = e.target.value;
    setLetter3(value);
    if (!value) {
      letter2Ref.current.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    setNotifications(dummyNotifications);
  }, []);

  const toggleNotificationPopover = () => {
    setShowNotificationPopover(prev => !prev);
  };

  const handleNotificationClick = (notification) => {
    setPlateNumber(notification.plateNumber);
    setLetter1(notification.letters[0]);
    setLetter2(notification.letters[1]);
    setLetter3(notification.letters[2]);
    setTriggerSearch(true);
    setShowNotificationPopover(false);
  };

  const handleShowMap = () => {
    setShowMapPopup(true);
  };

  const handleCloseMap = () => {
    setShowMapPopup(false);
  };

  return (
    <div className='flex h-screen w-screen relative'>
      <Sidebar />
      <div className='absolute top-4 right-4 text-blue-800'>
        <FaBell className='text-4xl cursor-pointer' onClick={toggleNotificationPopover} />
        {notifications.length > 0 && (
          <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-0.5 text-xs transform translate-x-2 -translate-y-2'>
            {notifications.length}
          </span>
        )}
        {showNotificationPopover && (
          <div className='absolute right-0 mt-2 bg-white shadow-lg rounded-md w-64'>
            <ul>
              {notifications.map((notification, index) => (
                <li
                  key={index}
                  className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleNotificationClick(notification)}
                >
                  {notification.title}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

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
                  onKeyDown={handleKeyDown}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-10 ml-2'
                  placeholder='ل'
                  ref={letter1Ref}
                  value={letter1}
                  onChange={handleLetter1Change}
                  onKeyDown={handleKeyDown}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-10 ml-2'
                  placeholder='ق'
                  ref={letter2Ref}
                  value={letter2}
                  onChange={handleLetter2Change}
                  onKeyDown={handleKeyDown}
                />
                <input
                  type='text'
                  className='p-2 rounded-md text-black w-10 ml-2'
                  placeholder='ه'
                  ref={letter3Ref}
                  value={letter3}
                  onChange={handleLetter3Change}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <button
                className='bg-blue-500 text-white p-2 rounded-md'
                onClick={handleSearch}
              >
                Search
              </button>
              {searchError && (
                <div className='bg-red-200 text-red-800 p-2 rounded-md mt-2'>
                  {searchError}
                </div>
              )}
              {searchResult && (
                <div className='bg-gray-200 text-gray-800 p-2 rounded-md mt-2'>
                  <h3 className='text-lg font-bold mb-2'>{searchResult.title}</h3>
                  <p className='mb-2'>{searchResult.description}</p>
                  <p className='mb-2'>Owner: {searchResult.owner.phoneNumber}</p>
                  <p className='mb-2'>Address: {searchResult.owner.address}</p>
                  <p className='mb-2'>Car ID: {searchResult.carID}</p>
                  <p className='mb-2'>Status: {searchResult.status}</p>
                  <div className='flex justify-between mt-4'>
                    <button
                      className={`${
                        searchResult.status === 'blocked' ? 'bg-red-500' : 'bg-green-500'
                      } text-white p-2 rounded-md`}
                      onClick={handleBlockToggle}
                    >
                      {searchResult.status === 'blocked' ? 'Unblock User' : 'Block User'}
                    </button>
                    <button
                      className='bg-blue-500 text-white p-2 rounded-md'
                      onClick={handleShowAllReports}
                    >
                      Show All Reports
                    </button>
                  </div>
                  <div className='flex justify-between mt-4'>
                    <button
                      className='bg-blue-500 text-white p-2 rounded-md'
                      onClick={handleShowMap}
                    >
                      Live Location
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {showPopup && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
            <div className='bg-white rounded-md p-4 w-full max-w-lg'>
              <h3 className='text-lg font-bold mb-4'>Reports</h3>
              <ul>
                {obstacles.map(obstacle => (
                  <li key={obstacle.id} className='mb-2'>
                    <div className='flex justify-between'>
                      <span>{obstacle.type} in {obstacle.location} at {obstacle.time}</span>
                      <span>{obstacle.status}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <button className='bg-blue-500 text-white p-2 rounded-md mt-4' onClick={handleClose}>
                Close
              </button>
            </div>
          </div>
        )}
        {showMapPopup && (
          <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-50'>
            <div className='bg-white rounded-md p-4 w-full max-w-lg'>
              <h3 className='text-lg font-bold mb-4'>Live Location</h3>
              {searchResult && searchResult.location && (
                <div className='w-full h-64'>
                  <LiveLocationMap location={searchResult.location} />
                </div>
              )}
              <button className='bg-blue-500 text-white p-2 rounded-md mt-4' onClick={handleCloseMap}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
