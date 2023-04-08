import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu, Card, Space } from 'antd';
import Layout from '../../layouts/Layout';
import { Head } from '@inertiajs/react';


const StudentProfile: React.FC = ({ text }) => {


    return (
        <>
            <Layout>
                <Head title="Profile" />
                {text}
            </Layout>
        </>
    );
};

export default StudentProfile;
