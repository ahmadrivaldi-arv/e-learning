import React, { useState } from 'react';
import { BookOutlined, UserOutlined, WhatsAppOutlined, SendOutlined, DashboardOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { router, usePage} from '@inertiajs/react';
import Navbar from './sections/Navbar';


const Layout: React.FC = ({ children }) => {

    return (
        <>
            <Navbar/>

            <div style={{ width: '80%', margin: '100px auto' }}>
                {children}
            </div>
        </>
    );
};

export default Layout;
