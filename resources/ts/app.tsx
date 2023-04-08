import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import route from 'ziggy-js';

createInertiaApp({
    title: (title:string) => `${title} - e-learning Universitas Pamulang`,
    progress:{
        color:'#eb4034'
    },
    resolve: name => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
        return pages[`./pages/${name}.tsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
