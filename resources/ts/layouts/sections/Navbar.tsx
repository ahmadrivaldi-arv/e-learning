import React, { useState } from 'react';
import { BookOutlined, UserOutlined, DashboardOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { router, usePage} from '@inertiajs/react';

const items: MenuProps['items'] = [

    {
        label: "Dashboard",
        key: 'student.dashboard',
        icon: <DashboardOutlined />
    },
    {
        label: "Profile",
        key: 'student.profile',
        icon: <UserOutlined />
    },
    {
        label: "Matkul",
        key: 'student.subjects',
        icon: <BookOutlined />
    },
]
const Navbar: React.FC = () => {

    const { currentRoute } = usePage().props;

    const [current, setCurrent] = useState('student.dashboard');

    const onClick: MenuProps['onClick'] = (e) => {

        setCurrent(e.key);

        // @ts-ignore
        router.visit( route(e.key), {
            preserveState: true,
        })
    };

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[currentRoute]} mode="horizontal" items={items} />
        </>
    );
};

export default Navbar;
