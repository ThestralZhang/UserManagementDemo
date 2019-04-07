const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.conf.js");
const webpack = require("webpack");

module.exports = merge(baseConfig, {
  mode: "development",
    entry: [
        "react-hot-loader/patch",
        "webpack/hot/only-dev-server"
    ],
    output: {
      publicPath: "/"
    },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 3000,
    historyApiFallback: true
      hot: true,
      publicPath: "/"
  },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
});
