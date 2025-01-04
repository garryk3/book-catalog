import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { federation } from '@module-federation/vite';

import { mfShared, APP_NAME_EXAMPLE, APP_PORT_EXAMPLE } from '@repo/configs';

export default defineConfig({
    preview: {
        port: 4000,
        open: true,
    },
    base   : "http://localhost:4000",
    plugins: [
        preact(),
        federation({
            name    : 'prod',
            manifest: true,
            remotes : {
                exampleApp: `${APP_NAME_EXAMPLE}@http://localhost:${APP_PORT_EXAMPLE}/mf-manifest.json`,
            },
            shared: mfShared,
        })
    ],
    build: {
        target: 'esnext',
        outDir: `build`,
    },
});