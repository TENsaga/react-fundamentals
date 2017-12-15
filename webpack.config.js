const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: { // output folder will be ourApp/dist/index_bundle.js
    path: path.resolve(__dirname, 'dist'),  // dirname references the current directory the script is run in
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // which files to parse
        exclude: /node_modules/,  // which files to skip
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    extractPlugin
  ]
}