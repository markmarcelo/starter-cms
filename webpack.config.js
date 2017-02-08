const path = require('path');


module.exports = {
  // bundle entry point
  entry: path.join(__dirname, './client/src/app.jsx'),

  // the bundle file end point
  output: {
    path: path.join(__dirname, './client/dist/js'),
    filename: 'app.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, './client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  // watch for rebundling
  watch: false
};