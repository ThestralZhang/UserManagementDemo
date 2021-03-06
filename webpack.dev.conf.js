const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf.js");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true
  }
});
