var path = require("path");

module.exports = {
	entry: {
		bundle: "./src/app.jsx" 
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

	devtool: "cheap-module-eval-source-map"
}