const dotenv = require("dotenv");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const sourcePath = path.join(__dirname, "./src");
const distPath = path.join(__dirname, "./dist");

dotenv.config();

module.exports = env => ({
  mode: env.environment,
  devServer: {
    contentBase: distPath,
    historyApiFallback: true,
    overlay:
      env.environment === "development" ? { errors: true, warnings: true } : {}
  },
  entry: [path.join(sourcePath, "./index.js")],
  output: {
    path: distPath,
    filename: "js/[name].[hash].js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {}
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".es6", ".css", ".jpg"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(sourcePath, "./index.html")
    }),
    new CleanWebpackPlugin()
  ]
});
