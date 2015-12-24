import Vue from 'vue'

new Vue({ // eslint-disable-line
  el: 'body',
  replace: false,
  components: {
    RegionPicker: require('../index')
  },
  data () {
    return {
      address: {}
    }
  },
  created () {
    this.region = require('../data')
  }
})
