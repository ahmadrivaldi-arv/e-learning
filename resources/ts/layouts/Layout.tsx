import React, { useState } from 'react';
import Navbar from './sections/Navbar';
import {Head} from "@inertiajs/react";

const Layout: React.FC = ({ children,title }) => {

    return (
        <>
            <Head title={title}/>

            <Navbar/>

            <div style={{ width: '80%', margin: '100px auto' }}>
                {children}
            </div>
        </>
    );
};

export default Layout;
