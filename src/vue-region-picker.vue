<script>
/**
 * vue-region-picker
 * @version 1.0.0
 * @author qingwei.li<cinwel.li@gmail.com>
 * @date 2015-12-17
 *
 * @description
 *
 * @param {string} province - province field is required.
 * @param {string} city - city field is required.
 * @param {string} district - district field is required.
 * @param {object} data - data field is required.
 * @param {object} [init] - initialize value.
 * @param {object} [placeholder] - placeholder
 * @param {boolean} [auto] - auto
 * @param {boolean} [required] - required
 *
 */
module.exports = {
  version: '1.0.0',
  name: 'RegionPicker',
  data () {
    return {
      provinceSelected: [],
      citySelected: [],
      districtSelected: []
    }
  },

  props: {
    province: {
      required: true,
      twoWay: true
    },
    city: {
      required: true,
      twoWay: true
    },
    district: {
      required: true,
      twoWay: true
    },
    init: {
      type: Object,
      default () {
        return {
          province: '',
          city: '',
          district: ''
        }
      },
      validator (object) {
        for (let key in object) {
          if (typeof object[key] !== 'string') {
            return false
          }
        }

        return true
      }
    },
    auto: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: Object,
      default () {
        return {
          province: '请选择',
          city: '请选择',
          district: '请选择'
        }
      }
    },
    required: {
      type: Boolean,
      default: false
    },
    data: {
      type: Object,
      required: true
    }
  },

  methods: {
    _filter (pid) {
      let result = []

      for (let code in this.data) {
        if (this.data.hasOwnProperty(code) &&
            this.data[code][1] === pid) {
          result.push([code, this.data[code][0]])
        }
      }

      return result
    },

    _selected (pid, model) {
      let items = this._filter(pid)
      let index = 0

      if (this.init[model] && typeof this.init[model] === 'string') {
        for (let key in items) {
          if (items[key][1].indexOf(this.init[model]) > -1) {
            index = key
            break
          }
        }
      }

      this.$set(`${model}Selected`, items[index] || [])

      return items
    }
  },

  computed: {

    provinces () {
      if (this.init.province && typeof this.init.province === 'string') {
        return this._selected('086', 'province')
      }

      return this._filter('086')
    },

    cities () {
      return this._selected(this.provinceSelected[0], 'city')
    },

    districts () {
      return this._selected(this.citySelected[0], 'district')
    },

    province () {
      return this.provinceSelected[1]
    },

    city () {
      return this.citySelected[1]
    },

    district () {
      return this.districtSelected[1]
    }
  }
}

</script>

<template>
  <div class="region-picker">
    <label class="province">
      <slot name="province"></slot>
      <select class="province-select" v-model="provinceSelected" :required="required">
        <option value="" v-text="placeholder.province"></option>
        <option v-for="item in provinces" :value="item" v-text="item[1]"></option>
      </select>
    </label>

    <label class="city" v-show="!auto || cities.length">
      <slot name="city"></slot>
      <select class="city-select" v-model="citySelected" :required="required && cities.length > 0">
        <option value="" v-text="placeholder.city"></option>
        <option v-for="item in cities" :value="item" v-text="item[1]"></option>
      </select>
    </label>

    <label class="district" v-show="!auto || districts.length">
      <slot name="district"></slot>
      <select class="district-select" v-model="districtSelected" :required="required && districts.length > 0">
        <option value="" v-text="placeholder.district"></option>
        <option v-for="item in districts" :value="item" v-text="item[1]"></option>
      </select>
    </label>
  </div>
</template>
