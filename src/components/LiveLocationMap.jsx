import React, { useState, useEffect } from 'react';
import MapGL, { Marker, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';

const MAPTILER = 'https://api.maptiler.com/maps/streets/style.json?key=ZFtcxc8UpIJArb56xQlZ';

export default function LiveLocationMap({ location }) {
  const [viewport, setViewport] = useState({
    latitude: location.lat,
    longitude: location.lng,
    zoom: 14,
    bearing: 0,
    pitch: 0,
  });

  return (
    <MapGL
      {...viewport}
      width="100%"
      height="100%"
      mapStyle={MAPTILER}
      mapLib={maplibregl}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      <Marker
        longitude={location.lng}
        latitude={location.lat}
        color="red"
      />
    </MapGL>
  );
};