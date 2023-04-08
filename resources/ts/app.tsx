import './bootstrap';
import '../css/app.css';

import React from 'react';
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'


createInertiaApp({
    title: (title: string) => `${title} - e-learning`,
    progress: {
        color: '#eb4034'
    },
    resolve: name => {
        // @ts-ignore
        const pages = import.meta.glob('./pages/**/*.tsx', {eager: true})
        return pages[`./pages/${name}.tsx`]
    },
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    },
}).then( () =>{ })
