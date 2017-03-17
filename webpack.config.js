var webpack = require("webpack");
var path = require("path");

const VENDOR_LIBS = [
  "jquery", "foundation-sites"
];

module.exports = {
	entry: {
		vendor: VENDOR_LIBS,
		bundle: "./src/app.jsx",
		jquery: "script-loader!jquery/dist/jquery.min.js",
    	foundation: "script-loader!foundation-sites/dist/foundation.min.js"
	},

	output: {
		path: path.join(__dirname, "public"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				use: "babel-loader",
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/
			}
		]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$ : 'jquery',
			jQuery: 'jquery',

		})
	],
	externals: {
		foundation: 'Foundation',
		jquery: 'jQuery'
	},
	devtool: "cheap-module-eval-source-map"
}