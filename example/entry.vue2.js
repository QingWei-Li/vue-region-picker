import 'github-markdown-css'
import 'highlight.js/styles/github.css'

import Vue from 'vue'
import Demo from './demo.vue2.md'
import region from 'china-area-data'
import RegionPicker from 'vue-region-picker'

Vue.use(RegionPicker, {
  region: region,
  vueVersion: 2
})

new Vue({ // eslint-disable-line
  el: '#app',
  components: {
    App: {
      template: `<div class="markdown-body">${Demo}</div>`,

      data () {
        return {
          region1: {},
          region2: {},
          region3: {
            province: '广东', // 可以通过名字，不需要填写完整
            city: 440300, // 也可以通过 (number) code
            district: '钢铁侠' // 填写错误的信息则不处理
          },
          region4: {},
          region5: {}
        }
      },

      methods: {
        change (value) {
          console.log(value)
        }
      }
    }
  }
})
