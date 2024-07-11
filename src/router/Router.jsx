import React from 'react';
import Main from '../pages/Main';
import Login from '../pages/Login';
import HeatMap from '../pages/HeatMap';
import AddObstacle from '../pages/AddObstacle';
import UserTracking from '../pages/UserTracking';
import AddNewMember from '../pages/AddNewMember';
import { Routes, Route } from 'react-router-dom';
import AdminManagement from '../pages/AdminManagement';

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
        </Routes>
    );
};