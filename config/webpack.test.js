var baseConfig = require('./webpack.base')

module.exports = Object.assign({}, baseConfig, {
  devtool: 'eval',
  reporters: [
    'progress',
    'coverage'
  ],
  coverageReporter: {
    type: 'text'
  },
  module: {
    postLoaders: [
      {
        test: /\.js$/,
        // exclude this dirs from coverage
        exclude: /(test|node_modules)/,
        loader: 'istanbul-instrumenter'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
})
