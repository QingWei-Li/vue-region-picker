var RegionPicker = require('./vue-region-picker.vue')

RegionPicker.install = function (Vue, { region }) {
  RegionPicker.region = region
  Vue.component(RegionPicker.name, RegionPicker)
}
module.exports = RegionPicker
