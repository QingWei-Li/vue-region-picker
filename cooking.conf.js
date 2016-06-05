var cooking = require('cooking')

cooking.set({
  entry: {
    main: './src/index.js',
    data: './src/china-region.json'
  },
  clean: true,
  template: false,
  dist: './dist',
  format: 'umd',
  moduleName: ['RegionPicker', '[name]'],
  extends: ['vue', 'lint']
})

module.exports = cooking.resolve()
