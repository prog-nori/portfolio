const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
 
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
        path: path.resolve(__dirname),
        filename: 'main.js',
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin(
            {
                // tsconfig.json はデフォルト
                configFile: 'tsconfig.json'
            }
        )]
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: path.resolve(__dirname, 'tsconfig.json'),
                    },
                },
            },
        ],
    },
};