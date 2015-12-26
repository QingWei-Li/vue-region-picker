import Vue from 'vue'
import region from './china-region.json'
import RegionPicker from './vue-region-picker.vue'

new Vue({ // eslint-disable-line
  el: 'body',
  replace: false,
  components: {
    RegionPicker
  },
  data () {
    return {
      address: {}
    }
  },
  created () {
    this.region = region
  }
})
