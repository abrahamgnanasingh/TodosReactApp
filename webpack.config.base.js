var path = require('path');
var webpack = require('webpack');

module.exports = function () {
    return {
        entry: './src/js/index.js',
        output: {
            path: __dirname + '/build',
            filename: 'js/bundle.min.js'
        },
        module: {
            // loaders: [
            rules: [
                {
                    test: /\.js$/,
                    // loaders: ['babel'],
                    use: [
                        'babel-loader'
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss/,
                    // loader: 'style-loader!css-loader!sass-loader'
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};
