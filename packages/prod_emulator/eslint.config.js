import {appLintConfig} from '@repo/configs';

export default [
    ...appLintConfig,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "import/no-unresolved"              : "off",
        },
    }
];