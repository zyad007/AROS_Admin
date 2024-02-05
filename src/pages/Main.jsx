import React from 'react'
import Map, { Marker, Popup } from 'react-map-gl/maplibre'
import 'maplibre-gl/dist/maplibre-gl.css';

const DEMOTILES_MAPLIBRE = "https://demotiles.maplibre.org/style.json"
const MAPTILER = 'https://api.maptiler.com/maps/streets/style.json?key=ZFtcxc8UpIJArb56xQlZ'

export default function Main() {
  return (
    <div className='h-full w-full' >
      <Map
        initialViewState={{
          latitude: 26.9,
          longitude: 30.4,
          zoom: 5.5
        }}
        mapStyle={MAPTILER}
        attributionControl={false}
      >
        <Marker longitude={30.4} latitude={26.9} anchor="bottom"
          draggable={true}
        >

        </Marker>

      </Map>
    </div>
  )
}
