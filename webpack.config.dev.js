var path = require('path');
var webpack = require('webpack');

var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.config.base.js');

module.exports = function (env) {
    return webpackMerge(commonConfig(), {
        devServer: {
            inline: true,
            contentBase: './build',
            port: 3000
        },
        devtool: 'cheap-module-eval-source-map'
    });
};
