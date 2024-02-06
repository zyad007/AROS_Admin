import React, { useState } from 'react';
import Map, { Marker, Popup } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAPTILER = 'https://api.maptiler.com/maps/streets/style.json?key=ZFtcxc8UpIJArb56xQlZ';

export default function Main() {
  const [popupInfo, setPopupInfo] = useState(null);

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

  return (
    <div className='h-full w-full' >
      <Map
        width='100%'
        height='100%'
        initialViewState={{
          latitude: 26.9,
          longitude: 30.4,
          zoom: 5.5
        }}
        mapStyle={MAPTILER}
        attributionControl={false}
      >
        {obstacles.map((obstacle, index) => (
          <Marker key={index} latitude={obstacle.lat} longitude={obstacle.lon}>
            <img 
              src={`Road icons/${obstacle.type}.png`} 
              alt={obstacle.type} 
              className='w-6 h-6 rounded-full'
              onMouseEnter={() => setPopupInfo(obstacle)}
              onMouseLeave={() => setPopupInfo(null)}
            />
          </Marker>
        ))}

        {popupInfo && (
          <Popup
            latitude={popupInfo.lat}
            longitude={popupInfo.lon}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              <h3>{popupInfo.type}</h3>
              <img src={popupInfo.imageURL} alt={popupInfo.type} className='w-32 h-auto' />
              <p>{popupInfo.description}</p>
            </div>
          </Popup>
        )}
      </Map>
    </div>
  );
};
