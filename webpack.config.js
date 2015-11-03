var webpack = require('webpack');
var assign = require('lodash.assign');

var configDefault = {
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
  debug: true
};

var configProd = {
  plugins : [new webpack.optimize.UglifyJsPlugin()],
  debug: false
};

var configDev = {
  devtool : 'eval'
};

function getConfigProd() {
  return assign(configProd, configDefault);
};

function getConfigDev() {
  return assign(configDev, configDefault);
};

function getConfigByType(type) {
  var isProd = type === 'production';
  return isProd ? getConfigProd() : getConfigDev();
};

module.exports = {
  getConfigByType : getConfigByType,
  getConfigDev: getConfigDev,
  getConfigProd: getConfigProd
};