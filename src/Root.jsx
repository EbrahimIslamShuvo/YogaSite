import React from 'react';
import MainNav from './Component/MainNav';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

const Root = () => {
    return (
        <div>
            <MainNav></MainNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;