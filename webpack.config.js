var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/Skeleton.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "Skeleton.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  },
  externals: {
    react: "react"
  }
};
