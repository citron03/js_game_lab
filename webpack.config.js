const path = require("path");

module.exports = {
  name: "webpack typescipt phaser",
  mode: "development",
  entry: {
    game: ["./index.ts"],
  },
  module: {
    rules: [{ test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" }],
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" },
    hot: true,
    static: { directory: path.resolve(__dirname) },
  },
};
