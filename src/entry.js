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
        province: '广东',
        city: '北京',
        district: '天津'
      }
    }
  },
  created () {
    this.region = region
  }
})
