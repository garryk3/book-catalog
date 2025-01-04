import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    server: {
        origin: 'http://localhost:3000',
        port  : 3000,
    },
    base   : "http://localhost:3000",
    plugins: [
        preact()
    ],
});