<script>
/**
 * vue-region-picker
 * @author qingwei.li<cinwel.li@gmail.com>
 * @date 2015-12-17
 *
 * @description
 *
 * @param {string} province - province field is required.
 * @param {string} city - city field is required.
 * @param {string} district - district field is required.
 * @param {object} [placeholder] - placeholder
 * @param {boolean} [two-select] - only province, city
 * @param {boolean} [auto] - auto display select element
 * @param {boolean} [disabled] - disabled
 * @param {boolean} [completed] - the return value is complete
 * @param {boolean} [required] - required
 *
 */
module.exports = {
  name: 'RegionPicker',
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
      twoWay: true
    },
    twoSelect: Boolean,
    auto: Boolean,
    completed: Boolean,
    required: Boolean,
    disabled: Boolean,
    rootCode: {
      default: '000000'
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
    }
  },

  methods: {
    _filter (pid) {
      const result = []
      const items = this.$options.region[pid]

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
          if (items[key][by].indexOf(model) > -1) {
            return key
          }
        }
        // by code
      } else {
        for (let key in items) {
          if (items[key][by] === model) {
            return key
          }
        }
      }
    },

    _selected (pid, model) {
      const items = this._filter(pid)
      let index = -1

      if (typeof model === 'string') {
        index = this._searchIndex(items, model, 1)
      } else if (typeof model === 'number') {
        index = this._searchIndex(items, model, 0)
      } else if (Array.isArray(model)) {
        index = this._searchIndex(items, model[0], 0)
      }

      return items[index] || []
    }
  },

  computed: {
    provinces () {
      return this._filter(this.rootCode)
    },

    cities () {
      return this._filter(this.provinceSelected[0])
    },

    districts () {
      return this._filter(this.citySelected[0])
    },

    provinceSelected: {
      get () {
        return this._selected(this.rootCode, this.$get('province'))
      },

      set (value) {
        this.province = this.completed ? value : value[1]
      }
    },

    citySelected: {
      get () {
        return this._selected(this.provinceSelected[0], this.$get('city'))
      },

      set (value) {
        this.city = this.completed ? value : value[1]
      }
    },

    districtSelected: {
      get () {
        return this._selected(this.citySelected[0], this.$get('district'))
      },

      set (value) {
        this.district = this.completed ? value : value[1]
      }
    }
  },

  watch: {
    provinceSelected () {
      this.$set('citySelected', this.$get('citySelected'))
    },

    citySelected () {
      this.$set('districtSelected', this.$get('districtSelected'))
    }
  },

  ready () {
    this.$set('provinceSelected', this.$get('provinceSelected'))
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

    <label class="district" v-if="!twoSelect" v-show="!auto || districts.length">
      <slot name="district"></slot>
      <select class="district-select" v-model="districtSelected" :required="required && districts.length > 0" :disabled="disabled">
        <option value="" v-text="placeholder.district"></option>
        <option v-for="item in districts" :value="item" v-text="item[1]"></option>
      </select>
    </label>
  </div>
</template>
