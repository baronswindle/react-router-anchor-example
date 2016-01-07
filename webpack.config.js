var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/App',
  output: {
    path: __dirname,
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};