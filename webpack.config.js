const path = require("path");
const webpack = require("webpack");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  devtool: false,
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9080,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }], //currently not working, doesnt downsize images
          ["mozjpeg", { quality: 10 }],
          ["optipng", { optimizationLevel: 7 }], //currently not working, doesnt downsize images
          ["pngquant", { quality: [0.1, 0.1] }],
          ["svgo", { plugins: [{ name: "removeViewBox", acive: false }] }],
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
      },
      {
        test: /\.(svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 12 * 1024,
          },
        },
      },
      {
        test: /\.(jpg|jpeg|gif)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 20 * 1024,
          },
        },
      },
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
    ],
  },
};
