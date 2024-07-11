import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components with Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

// Example data for total reports and solved reports
const data = {
  labels: ['Total Reports', 'Solved Reports'],
  datasets: [
    {
      data: [400, 150], // Example data
      backgroundColor: ['#FF6384', '#36A2EB'], // Colors for each slice
      hoverBackgroundColor: ['#FF6384', '#36A2EB'] // Same colors on hover
    }
  ]
};

const options = {
  cutout: '60%',
  responsive: true,
  maintainAspectRatio: false,
};

const ChartComponent = () => (
  <div className="App">
    <h2>Doughnut Chart</h2>
    <Doughnut data={data} options={options} />
  </div>
);

export default ChartComponent;
