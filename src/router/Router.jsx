import React from 'react'
import { BrowserRouter, RouterProvider, Routes, Route } from 'react-router-dom'
import Notfound from '../pages/Notfound'
import Main from '../pages/Main'
import Login from '../pages/Login'

export default function Router() {

    return (
        <Routes>
            <Route path='/*' element={<Main />} />
            <Route path='*' element={<Notfound />} />
        </Routes>
    )
}
