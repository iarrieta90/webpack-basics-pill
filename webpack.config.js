const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    //For tracking down errors and warnings to their original location
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress:true,
        port:9080,
    },
    output: {
        filename : 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    plugins: [
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    //Creates 'styles' nodes from JS strings
                    'style-loader',
                    //Translates CSS into CommonJS
                    'css-loader',
                    //Compile Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            }
        ]
    },
}