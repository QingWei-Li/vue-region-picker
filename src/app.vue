<script>
import VueRegionPicker from './vue-region-picker.vue'
import region from 'json!./china-region.json'

module.exports = {
  name: 'app',
  data () {
    return {
      address: {}
    }
  },

  created () {
    this.region = region
  },

  components: {
    VueRegionPicker
  }
}

</script>
<template>
  <div v-text="address | json"></div>
  <form action="">
    <vue-region-picker
      :init="{province:  '广东', city: '广州', district: '海珠'}"
      :province.sync="address.province"
      :city.sync="address.city"
      :district.sync="address.district"
      :data='region'>
    </vue-region-picker>
    <input type="submit">
  </form>
</template>