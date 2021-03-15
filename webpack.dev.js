const path = require("path");
const common = require("./webpack.config");
const { merge } = require("webpack-merge");
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext][query]",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader", //3- Injects 'styles' nodes into DOM
          "css-loader", //2- Translates CSS into CommonJS
          "sass-loader", //1- Compiles Sass into CSS
        ],
      },
    ],
  },
});
