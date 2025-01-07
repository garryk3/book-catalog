import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
    preview: {
        port: 4000,
        open: true,
    },
    base   : "http://localhost:4000",
    plugins: [
        preact()
    ],
    build: {
        target: 'esnext',
        outDir: `build`,
    },
});