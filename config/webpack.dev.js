var path = require('path')
var baseConfig = require('./webpack.base')

module.exports = Object.assign({}, baseConfig, {
  devtool: 'sourcemap',
  entry: [
    path.join(__dirname, '../example/entry.js')
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }
})
