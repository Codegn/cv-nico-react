var webpack = require("webpack");
var path = require("path");

var BUILD_DIR = path.resolve(__dirname, "./build");
var APP_DIR = path.resolve(__dirname, "./src/client");

const config = {
  entry: {
    main: APP_DIR + "/index.js"
  },
  output: {
    filename: "bundle.js",
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};

module.exports = config;