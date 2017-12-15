module.export = {
  entry: [
    './app/index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,  // which files to parse
        exclude: /node_modules/,  // which files to skip
        use: 'babel-loader', preset: [ 'env', 'react' ]  // use tells webpack which loader to use
      }
    ]
  },
  output: { // output folder will be ourApp/dist/index_bundle.js
    path: path.resolve(__dirname, 'dist'),  // dirname references the current directory the script is run in
    filename: 'index_bundle.js'
  },
  plugins: {
    newHtmlWebpackPlugin({
      template: 'app/index.html'
    })
  }
}