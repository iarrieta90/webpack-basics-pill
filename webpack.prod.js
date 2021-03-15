const path = require('path');
const common = require('./webpack.config');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename : '[name].[contenthash].bundle.js',
        path: path.join(__dirname, 'dist'),
        assetModuleFilename: 'img/[name][ext][query]'
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new HTMLWebpackPlugin({
            template: "./src/index.html",
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
          })
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              MiniCssExtractPlugin.loader, //3- Extracts CSS into files
              "css-loader", //2- Translates CSS into CommonJS
              "sass-loader", //1- Compiles Sass into CSS
            ],
          },
        ],
      }
    
});