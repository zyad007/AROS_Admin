import React from 'react';
import Main from '../pages/Main';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import { Routes, Route } from 'react-router-dom';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
