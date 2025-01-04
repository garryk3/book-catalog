import { defineConfig } from 'vite';
import { federation } from '@module-federation/vite';
import preact from '@preact/preset-vite';

import {mfShared, APP_NAME_EXAMPLE, APP_PORT_EXAMPLE} from '@repo/configs';

export default defineConfig({
    server: {
        origin: `http://localhost:${APP_PORT_EXAMPLE}`,
        port  : APP_PORT_EXAMPLE,
    },
    base   : `http://localhost:${APP_PORT_EXAMPLE}`,
    plugins: [
        preact(),
        federation({
            name    : APP_NAME_EXAMPLE,
            filename: 'remoteEntry.js',
            manifest: true,
            dts     : true,
            remotes : {},
            exposes : {
                './App'   : './src/application/exports/appExport.ts',
                './routes': './src/application/exports/routesExport.ts',
            },
            shared: mfShared,
        })
    ],
    build: {
        target: 'esnext',
        outDir: `../../dist/${APP_NAME_EXAMPLE}`,
    },
});
