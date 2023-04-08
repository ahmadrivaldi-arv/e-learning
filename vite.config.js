import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const path = require('path');

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/ts/app.tsx'],
            refresh: true,
        }),
    ],
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'resources/js/')
        }
    }
});
