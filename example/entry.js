import Vue from 'vue'
import region from '../src/china-region.json'
import RegionPicker from '../src/index.js'

Vue.config.debug = true
Vue.use(RegionPicker, {
  region: region
})

// RegionPicker.region = region

new Vue({ // eslint-disable-line
  el: 'body',
  replace: false,
  // components: { RegionPicker },
  data () {
    return {
      address: {
        province: '贵州',
        city: '黔南',
        district: ''
      }
    }
  }
})
