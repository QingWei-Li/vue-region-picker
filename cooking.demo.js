var cooking = require('cooking')

cooking.set({
  entry: './example/entry.js',
  template: './example/index.tpl',
  dist: './example/dist',
  devServer: {
    port: 2333,
    publicPath: '/'
  },
  publicPath: '/vue-region-picker/',
  hash: true,
  extractCSS: true,
  extends: ['vue', 'lint']
})

cooking.add('externals', {
  'vue': 'Vue'
})

module.exports = cooking.resolve()
