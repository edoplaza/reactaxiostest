const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProd = process.env.NODE_ENV === "production";
var cssDev = [
  "style-loader?sourceMap",
  "css-loader?sourceMap",
  "postcss-loader?sourceMap",
  "sass-loader?sourceMap"
];
var cssProd = ExtractTextPlugin.extract({
  fallback: "style-loader",
  use: [
    { loader: "css-loader" },
    { loader: "postcss-loader" },
    { loader: "sass-loader" }
  ]
});

const cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    sourceMapFilename: "[file].map" // Default
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.(woff(2)?)(\?[a-z0-9]+)?$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
          outputPath: "/",
          publicPath: ".."
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    stats: "errors-only",
    compress: isProd,
    open: true,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "/css/[name].css",
      disable: !isProd,
      allChunks: true
    })
  ]
};
