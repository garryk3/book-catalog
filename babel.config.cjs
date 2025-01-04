module.exports = (api) => {
    api.cache.using(() => process.env.NODE_ENV);
    const isTest = api.env('test');

    return {
        sourceMaps: true,
        presets   : [
            [
                '@babel/preset-env',
                {
                    targets: isTest ? { node: 'current', } : {
                        chrome: '84',
                        safari: '14.1',
                    },
                    useBuiltIns: 'usage',
                    corejs     : {
                        version  : '3.18',
                        proposals: true,
                    },
                }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
        ],
        plugins: [
            [
                'babel-plugin-transform-imports'
            ],
            ["@babel/plugin-transform-react-jsx", {
                "pragma"    : "h",
                "pragmaFrag": "Fragment",
            }]
        ],
        env: {
            development: {
                plugins: [
                    'react-refresh/babel'
                ],
            },
            production: {
                plugins: ['babel-plugin-jsx-remove-data-test-id'],
            },
        },
        babelrcRoots: [
            '.',
            './packages/*',
            './apps/*'
        ],
    };
};
