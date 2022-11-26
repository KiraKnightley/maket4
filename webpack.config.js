const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV || "development",
  devMode = mode === "development",
  target = devMode ? "web" : "browserslist",
  devtool = devMode ? "source-map" : undefined;

module.exports = {
  mode,
  target,
  devtool,
  entry: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js")],
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "js/[hash].js",
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "styles/[hash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(c|sc)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [require("postcss-preset-env")],
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(ttf|ttc|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[hash].[ext]",
        },
      },
      {
        test: /\.(jpg|png)/i,
        generator: {
          filename: "assets/img/[hash].[ext]",
        },
      },
      {
        test: /\.svg/i,
        generator: {
          filename: "assets/icons/[hash].[ext]",
        },
      },
      {
        test: /\.ico/i,
        generator: {
          filename: "favicon[ext]",
        },
      },
    ],
  },
};
