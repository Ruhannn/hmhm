import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Home';

const Layout = () => {
    return (
        <div>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;