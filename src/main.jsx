import React from 'react';
import './styles/index.css'
import Router from './router/Router';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='flex w-screen h-screen'>
      <Router />
    </div>
  </BrowserRouter>
);