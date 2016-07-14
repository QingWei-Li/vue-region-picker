var cooking = require('cooking')
var path = require('path')

cooking.set({
  entry: {
    'app': './example/entry.js',
    'app.vue2': './example/entry.vue2.js',
    'data': 'china-area-data'
  },
  template: [
    {
      filename: 'index.html',
      template: './example/index.tpl',
      chunks: ['app', 'data']
    },
    {
      filename: 'vue2/index.html',
      template: './example/index.vue2.tpl',
      chunks: ['app.vue2', 'data']
    }
  ],
  chunk: [
    {
      name: 'data'
    }
  ],
  dist: './example/dist',
  devServer: {
    port: 2333,
    publicPath: '/'
  },
  publicPath: '/vue-region-picker/',
  hash: true,
  extractCSS: true,
  extends: ['lint']
})

cooking.add('externals', {
  'vue': 'Vue'
})

cooking.add('loader.md', {
  test: /.md$/,
  loaders: ['html-loader', 'highlight-loader', 'markdown-loader']
})

cooking.add('resolve.alias', {
  'vue-region-picker': path.join(__dirname, './src/entry.js')
})

module.exports = cooking.resolve()
