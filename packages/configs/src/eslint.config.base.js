import { configs, utils } from '@front-utils/linter/dist/index.js';
import turbo from "eslint-plugin-turbo";

import { initStructuredClonePolyfill } from './utils/polifils.js';

// /** из-за того, что CI агенты работают на node === 16.8 приходится полифилить :( (ошибки в typescript-eslint) */
initStructuredClonePolyfill();

const turboBaseConfig = [
    turbo.configs["flat/recommended"]
];

export const simpleAppLintConfig = [
    ...turboBaseConfig,
    ...configs.standart
];

export const appLintConfig = [
    ...utils.createEslintConfig({ 
        types: ['babel', 'ts', 'react'], 
        files: ['**/*.{js,jsx,ts,tsx,cjs}'],
    }),
    {
        languageOptions: {
            sourceType: 'module',
        },
    },
    ...turboBaseConfig
];