var webpack = require('webpack');

module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {
    entry: './app/scripts/main.js',
    output: {
      path: __dirname,
      filename: 'main.js'
    },
    module: {
      preLoaders: [
        {test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/}
      ]
    },
    debug : isDev
  };

  if(isDev){
    config.devtool = 'eval';
  }else {
    config.plugins = [new webpack.optimize.UglifyJsPlugin()]
  }

  return config;
}