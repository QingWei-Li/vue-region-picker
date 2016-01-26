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
      twoWay: true
    },
    city: {
      required: true,
      twoWay: true
    },
    district: {
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
        for (const prop in object) {
          if (object.hasOwnProperty(prop)) {
            console.error('"init" attribute is deprecated. Please use province / city / district to set initial value.')
            break
          }
        }
        return object
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

    // data model: [code, name]
    _searchIndex (items, model, by) {
      // by name
      if (by === 1) {
        for (let key in items) {
          if (items[key][by].indexOf(this.init[model]) > -1) {
            return key
          }
        }
        // by code
      } else {
        for (let key in items) {
          if (items[key][by] === this.init[model]) {
            return key
          }
        }
      }
    },

    _selected (pid, model) {
      const items = this._filter(pid)
      let index = -1

      if (this.init[model] && typeof this.init[model] === 'string') {
        index = this._searchIndex(items, model, 1)
      } else if (this.init[model] && typeof this.init[model] === 'number') {
        index = this._searchIndex(items, model, 0)
      }

      this.$set(`${model}Selected`, items[index] || [])

      return items
    }
  },

  computed: {
    provinces () {
      return this._selected('86', 'province')
    },

    cities () {
      return this._selected(this.provinceSelected[0], 'city')
    },

    districts () {
      return this._selected(this.citySelected[0], 'district')
    }
  },

  watch: {
    provinceSelected (value) {
      this.province = this.completed ? value : value[1]
    },

    citySelected (value) {
      this.city = this.completed ? value : value[1]
    },

    districtSelected (value) {
      this.district = this.completed ? value : value[1]
    }
  },

  created () {
    // 2.0
    // this.init = {
    //   province: this.province,
    //   city: this.city,
    //   district: this.district
    // }

    this.init = {
      province: this.province || this.init.province,
      city: this.city || this.init.city,
      district: this.district || this.init.district
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
