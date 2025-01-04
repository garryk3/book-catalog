import {utils} from '@front-utils/linter/dist/index.js';

export default utils.createEslintConfig({
    files: [
        'eslint.config.js',
        'babel.config.cjs'
    ],
});