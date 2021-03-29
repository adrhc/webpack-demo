const devMode = process.env.NODE_ENV !== "production";
const webpack = require("webpack");
const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const fs = require("fs");

const templateFile = fs.readFileSync("./demo/template.html", "utf8");
const templateContentOf = (name) => templateFile.replace(/SCRIPT-NAME/g, name);
const templateOf = (demoName) =>
  new HtmlWebpackPlugin({
    filename: `${demoName}.html`,
    templateContent: templateContentOf(demoName),
    favicon: "./demo/icon1.jpg",
  });
const htmls = fs
  .readdirSync("./demo")
  .filter((f) => /demo.*\.js/.test(f))
  .map((f) => templateOf(f.slice(0, -3)));

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    index: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: devMode ? "[name].bundle.js" : "[name].[contenthash].bundle.js",
    filename: "reflections.js",
    clean: true,
    publicPath: "",
    library: {
      type: "var",
      name: "rf",
    },
  },
  /* optimization: {
    // runtimeChunk: "single",
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
  }, */
  watchOptions: {
    aggregateTimeout: 500,
    ignored: /node_modules/,
  },
  devtool: devMode ? "inline-source-map" : "source-map",
  devServer: {
    // contentBase: ["./dist", "./demo"],
    static: ["./dist", "./demo"],
    // static: "./dist",
    port: 1234,
    firewall: false,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
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
      { test: /\.hbs$/, loader: "handlebars-loader" },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    /* new HtmlWebpackPlugin({
      title: "Development",
    }), */
    /* new HtmlWebpackPlugin({
      // filename: "demo1.html",
      templateContent: templateOf("demo1"),
      favicon: "./demo/icon1.jpg",
    }), */
    ...htmls,
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
