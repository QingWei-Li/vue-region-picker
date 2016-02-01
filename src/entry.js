import Vue from 'vue'
import region from './china-region.json'
import RegionPicker from './vue-region-picker.vue'

Vue.config.debug = true

new Vue({ // eslint-disable-line
  el: 'body',
  replace: false,
  components: {
    RegionPicker
  },
  data () {
    return {
      address: {
        province: '贵州',
        city: '黔南',
        district: '都匀'
      }
    }
  },
  created () {
    this.region = region
  }
})
