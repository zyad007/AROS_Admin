import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import Router from './router/router'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='flex w-screen h-screen'>
      <Sidebar />
      <Router />
    </div>
  </BrowserRouter>
)
