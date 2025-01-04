import { configs, utils } from '@front-utils/linter/dist/index.js';
import turbo from "eslint-plugin-turbo";

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