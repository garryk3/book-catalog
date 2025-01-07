import { defineConfig, PluginOption } from 'vite';
import preact from '@preact/preset-vite';

import {APP_NAME_EXAMPLE, APP_PORT_EXAMPLE} from '@repo/configs';

export default defineConfig({
    server: {
        origin: `http://localhost:${APP_PORT_EXAMPLE}`,
        port  : APP_PORT_EXAMPLE,
    },
    base   : `http://localhost:${APP_PORT_EXAMPLE}`,
    plugins: [
        preact() as PluginOption
    ],
    build: {
        target: 'esnext',
        outDir: `../../dist/${APP_NAME_EXAMPLE}`,
    },
});
