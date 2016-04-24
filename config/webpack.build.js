var path = require('path')
var webpack = require('webpack')
var baseConfig = require('./webpack.base')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    main: path.join(__dirname, '/../src/vue-region-picker.vue'),
    data: path.join(__dirname, '/../src/china-region.json')
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    filename: '[name].js',
    libraryTarget: 'umd',
    library: ['RegionPicker', '[name]']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})
