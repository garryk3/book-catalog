import {simpleAppLintConfig} from './src/eslint.config.base.js';

export default [
    ...simpleAppLintConfig,
    {
        ignores: ['**/index.d.ts'],
    }
];
