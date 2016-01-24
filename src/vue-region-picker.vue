<script>
/**
 * vue-region-picker
 * @version 1.2.2
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
 * @param {boolean} [auto] - auto display select element
 * @param {boolean} [disabled] - disabled
 * @param {boolean} [completed] - the return value is complete
 * @param {boolean} [required] - required
 *
 */
module.exports = {
  version: '1.2.2',
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
          if (!(typeof object[key] === 'string' || typeof object[key] === 'number')) {
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
    completed: {
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
    disabled: {
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
      const result = []
      const items = this.data[pid]

      for (let code in items) {
        result.push([parseInt(code, 10), items[code]])
      }

      return result
    },

    _selected (pid, model) {
      const items = this._filter(pid)
      let index = 0

      if (this.init[model] && typeof this.init[model] === 'string') {
        for (let key in items) {
          if (items[key][1].indexOf(this.init[model]) > -1) {
            index = key
            break
          }
        }
      } else if (this.init[model] && typeof this.init[model] === 'number') {
        for (let key in items) {
          if (items[key][0] === this.init[model]) {
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
      if (this.init.province) {
        return this._selected('86', 'province')
      }

      return this._filter('86')
    },

    cities () {
      return this._selected(this.provinceSelected[0], 'city')
    },

    districts () {
      return this._selected(this.citySelected[0], 'district')
    },

    province () {
      return this.completed ? this.provinceSelected : this.provinceSelected[1]
    },

    city () {
      return this.completed ? this.citySelected : this.citySelected[1]
    },

    district () {
      return this.completed ? this.districtSelected : this.districtSelected[1]
    }
  }
}

</script>

<template>
  <div class="region-picker">
    <label class="province">
      <slot name="province"></slot>
      <select class="province-select" v-model="provinceSelected" :required="required" :disabled="disabled">
        <option value="" v-text="placeholder.province"></option>
        <option v-for="item in provinces" :value="item" v-text="item[1]"></option>
      </select>
    </label>

    <label class="city" v-show="!auto || cities.length">
      <slot name="city"></slot>
      <select class="city-select" v-model="citySelected" :required="required && cities.length > 0" :disabled="disabled">
        <option value="" v-text="placeholder.city"></option>
        <option v-for="item in cities" :value="item" v-text="item[1]"></option>
      </select>
    </label>

    <label class="district" v-show="!auto || districts.length">
      <slot name="district"></slot>
      <select class="district-select" v-model="districtSelected" :required="required && districts.length > 0" :disabled="disabled">
        <option value="" v-text="placeholder.district"></option>
        <option v-for="item in districts" :value="item" v-text="item[1]"></option>
      </select>
    </label>
  </div>
</template>
