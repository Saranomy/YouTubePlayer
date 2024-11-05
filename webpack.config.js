const path = require('path');
module.exports = {
    entry: {
        code: './code.ts',
    },
    mode: 'production',
    module: {
        rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname,
    },
};