const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        publicPath: '/',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    entry: {
        index: './index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: false,
        port: 8080,
        historyApiFallback: true,
        /*historyApiFallback: {
          index: 'index.html'
        }*/
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.md$/,
                use: 'raw-loader',
            },
        ],
    },
};
