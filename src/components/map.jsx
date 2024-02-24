import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl/maplibre';

const MAPTILER = 'https://api.maptiler.com/maps/streets/style.json?key=ZFtcxc8UpIJArb56xQlZ';

export default function Map({ obstacles, setPopupInfo, popupInfo }) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      try {
        map.on('load', function () {
          map.addSource('egypt_cities', {
            type: 'geojson',
            data: '../../public/metadata-egy_admbnda_adm1_capmas_20170421-zip.geojson'
          });

          map.addLayer({
            'id': 'egypt_cities',
            'type': 'fill',
            'source': 'egypt_cities',
            'layout': {},
            'paint': {
              'fill-color': '#088',
              'fill-opacity': 0.8
            }
          });

          map.addLayer({
            'id': 'outline',
            'type': 'line',
            'source': 'egypt_cities',
            'layout': {},
            'paint': {
              'line-color': '#888',
              'line-width': 1
            }
          });
        });
      } catch (error) {
        console.error('Error loading GeoJSON data:', error);
      }
    }
  }, [map]);

  return (
    <MapGL
      width='100%'
      height='100%'
      initialViewState={{
        latitude: 26.9,
        longitude: 30.4,
        zoom: 5.5
      }}
      mapStyle={MAPTILER}
      attributionControl={false}
      onViewportChange={viewport => setMap(viewport)}
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
    </MapGL>
  );
}
