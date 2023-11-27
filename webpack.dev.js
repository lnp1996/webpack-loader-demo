const { default: test } = require("node:test");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: "./dist",
    overlay: {
      warnings: true,
      errors: true,
    },
    open: true,
  },
  module: {
    rules: [
    //   {
    //     test: /\.js$/,
    //     use: {
    //       loader: path.resolve(__dirname, "./src/loaders/my-loader.js"),
    //     },
    //   },
      {
        test: /\.js$/,
        use: [
          {
            loader: "my-loader",
            options: {
              flag: true,
            },
          },
        ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: "md-loader",
            options: {
              flag: true,
            },
          },
        ],
      },
    ],
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "./src/loaders")],
  },
};
