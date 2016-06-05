import RegionPicker from './vue-region-picker'

RegionPicker.install = (Vue, { region }) => {
  RegionPicker.region = region
  Vue.component(RegionPicker.name, RegionPicker)
}

module.exports = RegionPicker
