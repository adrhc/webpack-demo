const webpack = require("webpack");
const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	mode: process.env.NODE_ENV,
	entry: {
		index: "./src/index.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		// filename: "[name].bundle.js",
		filename: devMode ? "[name].bundle.js" : "[name].[contenthash].bundle.js",
		clean: true,
		publicPath: "",
	},
	optimization: {
		// runtimeChunk: "single",
		splitChunks: {
			// include all types of chunks
			chunks: "all",
		},
	},
	watchOptions: {
		aggregateTimeout: 500,
		ignored: /node_modules/,
	},
	devtool: devMode ? "inline-source-map" : "source-map",
	devServer: {
		contentBase: "./dist",
		port: 1234,
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(ico|png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
			{
				test: /\.json5$/i,
				type: "json",
				parser: {
					parse: json5.parse,
				},
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({
			title: "Development",
		}),
		new MiniCssExtractPlugin({
			filename: devMode ? "[name].css" : "[name].[contenthash].css",
			chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
		}),
		/* new webpack.SourceMapDevToolPlugin({
      filename: "sourcemaps/[file].map",
      publicPath: "",
      fileContext: "public",
    }), */
	],
};
