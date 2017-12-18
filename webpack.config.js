const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [ './src/index.js' ],
  output: {
    // output folder will be ourApp/dist/index_bundle.js
    path: path.resolve(__dirname, 'dist'), // dirname references the current directory the script is run in
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // which files to parse
        exclude: /node_modules/, // which files to skip
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env', 'react', 'stage-0' ],
          },
        },
      },
      {
        test: /\.(s*)css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ],
        }),
      },
      {
        test: /\.(ttf|otf|eot|svg|woff|woff2?)(\?.+)?$/,
        loader: 'url-loader', // used to load svg
        options: {
          limit: 10000,
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'index_bundle.css' }),
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
  ],
};
