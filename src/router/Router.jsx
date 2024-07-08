import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../pages/Main';
import HeatMap from '../pages/HeatMap';
import UserTracking from '../pages/UserTracking';
import AdminManagement from '../pages/AdminManagement';
import AddObstacle from '../pages/AddObstacle';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import AddNewMember from '../pages/AddNewMember';

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Main />} />
            <Route path="/heat-map" element={<HeatMap />} />
            <Route path="/user-tracking" element={<UserTracking />} />
            <Route path="/admin-management" element={<AdminManagement />} />
            <Route path="/add-obstacle" element={<AddObstacle />} />
            <Route path="/add-new-member" element={<AddNewMember />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};