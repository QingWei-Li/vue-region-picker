var cooking = require('cooking')

cooking.set({
  entry: './src/entry.js',
  clean: true,
  template: false,
  dist: './dist',
  format: 'umd',
  moduleName: 'RegionPicker',
  extends: ['lint']
})

module.exports = cooking.resolve()
