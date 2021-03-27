const path = require("path");
const json5 = require("json5");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    // print: { import: "./src/print.js", dependOn: "shared" },
    /* index: { import: "./src/index.js", dependOn: "shared" },
    shared: ["lodash"], */
    index: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "",
  },
  /* optimization: {
    runtimeChunk: "single",
  }, */
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: "all",
    },
    /* splitChunks: {
      // include all types of chunks
      chunks: "all",
      name: "commons",
    }, */
    /* splitChunks: {
      cacheGroups: {
        /* default: false,
        vendors: false, /
        // vendor chunk
        vendors: {
          // sync + async chunks
          chunks: "all",
          // import file path containing node_modules
          test: /node_modules/,
					// name: "vendors",
					// filename: '[name]-vendors.bundle.js',
					filename: '[contenthash]-vendors.bundle.js',
        },
      },
    }, */
    /* splitChunks: {
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          // idHint: "vendors",
          // name: "vendors",
					//
					// [name] is id when not having defaultVendors.name set
					// DeprecationWarning: [hash] is now [fullhash] (also consider using [chunkhash] or [contenthash]
					// filename: '[fullhash]-[name]-vendors.bundle.js',
					filename: '[fullhash]-vendors.bundle.js',
          // enforce: true
        },
        default: {
          idHint: "default",
          name: "default",
					filename: '[name]-default.bundle.js',
					// enforce: true
        },
      },
    }, */
    /* splitChunks: {
      // include all types of chunks
      chunks: "all",
			filename: '[contenthash].bundle.js', -> webpack docs: setting filename here is not good
    }, */
    /* splitChunks: {
      // chunks defaults to async only
      chunks: "all",
      cacheGroups: {
        defaultVendors: {
          // filename: "[name]-vendors.bundle.js",
          filename: "[contenthash]-vendors.bundle.js",
        },
        default: {
          // filename: "[name]-vendors.bundle.js",
          filename: "[contenthash]-default.bundle.js",
          // enforce: true
        },
      },
    }, */
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
    port: 1234,
  },
  module: {
    rules: [
      /* {
        test: /\.s[ac]ss$/i,
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      }, */
      {
        test: [/\.css$/i, /\.s[ac]ss$/i],
        use: [
          // fallback to style-loader in development
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      /* {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }, */
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
    new HtmlWebpackPlugin({
      title: "Development",
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      // https://webpack.js.org/concepts/under-the-hood/#output
      chunkFilename: "[contenthash].css",
    }),
  ],
};
