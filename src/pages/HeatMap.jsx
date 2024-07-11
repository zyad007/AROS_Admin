import React, { useState } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import Sidebar from '../components/Sidebar';
import ChartComponent from '../components/ChartComponent';

export default function HeatMap() {
  const [view, setView] = useState('HeatMap');

  const switchToHeatMapView = () => {
    setView('HeatMap');
  };

  const switchToChartView = () => {
    setView('Chart');
  };

  return (
    <div className='flex h-full w-full'>
      <Sidebar />
      <div className='flex flex-col w-full pb-2 pr-2 '>
        <div className='w-[98%] h-[10%] flex justify-stretch items-stretch space-x-2 text-white mr-2 ml-4'>
          <button
            className={`w-full mt-2 rounded-t-md flex justify-center items-center ${view === 'map' ? 'bg-[#1A2342] border border-[#101A33]' : 'bg-[#223066] border border-[#101A33]'
              }`}
            onClick={switchToHeatMapView}
          >
            Heat Map View
          </button>
          <button
            className={`w-full mt-2 rounded-t-md flex justify-center items-center ${view === 'list' ? 'bg-[#1A2342] border border-[#101A33]' : 'bg-[#223066] border border-[#101A33]'
              }`}
            onClick={switchToChartView}
          >
            Chart View
          </button>
        </div>
        <div className='w-[98%] h-full border rounded-md border-[#101A33] bg-[#1A2342] p-2 border-t-0 rounded-t-none mr-2 ml-4'>
          {view === 'HeatMap' ? <div>heat map</div> : <ChartComponent />}
        </div>
      </div>
    </div>
  );
};
