import Vue from 'vue'
import App from './app'

import region from '../src/china-region.json'
import RegionPicker from '../src/index.js'

Vue.use(RegionPicker, {
  region: region
})

new Vue({  // eslint-disable-line
  el: 'body',
  components: {
    App
  }
})
