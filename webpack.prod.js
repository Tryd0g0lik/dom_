const { merge } = require("webpack-marge");
const common = require("./webpack.config");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
	mode: "productions",
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index.html",
			filename: "./index.html",
			minify: {
				collapseWhitespace: true,
			}
		})
	]
})
