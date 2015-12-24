var path = require('path')
var webpack = require('webpack')
var baseConfig = require('./webpack.base')

module.exports = Object.assign({}, baseConfig, {
  entry: {
    'component': path.join(__dirname, '/../src/vue-region-picker.vue'),
    'data': path.join(__dirname, '/../src/china-region.js')
  },
  output: {
    path: path.join(__dirname, '/../dist'),
    publicPath: '/dist/',
    filename: 'RegionPicker.[name].js',
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
    new webpack.BannerPlugin('vue-region-picker\n(c) 2015 Cinwell Li\nReleased under the MIT License.'),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
})
