const Path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: [
      "react",
      "react-dom",
      "react-multiple-render"
    ],
  	app: "./src/app.js"
  },
  output: {
  	path: Path.join(__dirname.replace('client', ''), "/public/js/"),
    filename: "[name].js"
  },
  module: {
  	loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
        loader: "babel-loader"
			}
		]
  },
	plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.js",
        minChunks: 2
      })
    ]
};
