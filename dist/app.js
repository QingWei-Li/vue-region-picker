(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("RegionPicker", [], factory);
	else if(typeof exports === 'object')
		exports["RegionPicker"] = factory();
	else
		root["RegionPicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegionPicker = undefined;
exports.default = install;

var _regionPicker = __webpack_require__(1);

var _regionPicker2 = _interopRequireDefault(_regionPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RegionPicker = _regionPicker2.default;
function install(Vue, _ref) {
  var region = _ref.region;
  var vueVersion = _ref.vueVersion;

  _regionPicker2.default.region = region;
  _regionPicker2.default.vueVersion = vueVersion || 1;
  Vue.component(_regionPicker2.default.name, _regionPicker2.default);
}

/***/ },
/* 1 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'RegionPicker',

  vueVersion: 1,

  template: '\n    <div class="region-picker">\n      <label class="province">\n        <slot name="province"></slot>\n        <select class="province-select" :value="provinceSelected" @change="change(\'provinceSelected\', $event.target.value)" :required="required" :disabled="disabled">\n          <option value="" v-text="placeholder.province"></option>\n          <option v-for="item in provinces" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n      <label class="city" v-show="!auto || cities.length">\n        <slot name="city"></slot>\n        <select class="city-select" :value="citySelected" @change="change(\'citySelected\', $event.target.value)" :required="required && cities.length > 0" :disabled="disabled">\n          <option value="" v-text="placeholder.city"></option>\n          <option v-for="item in cities" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n      <label class="district" v-if="!twoSelect" v-show="!auto || districts.length">\n        <slot name="district"></slot>\n        <select class="district-select" :value="districtSelected" @change="change(\'districtSelected\', $event.target.value)" :required="required && districts.length > 0" :disabled="disabled">\n          <option value="" v-text="placeholder.district"></option>\n          <option v-for="item in districts" :value="item" v-text="item[1]"></option>\n        </select>\n      </label>\n    </div>',

  props: {
    province: {},
    city: {},
    district: {},
    twoSelect: Boolean,
    auto: Boolean,
    completed: Boolean,
    required: Boolean,
    disabled: Boolean,
    rootCode: {
      default: '86'
    },
    placeholder: {
      type: Object,
      default: function _default() {
        return {
          province: '请选择',
          city: '请选择',
          district: '请选择'
        };
      }
    }
  },

  methods: {
    change: function change(field, value) {
      this[field] = value.split(',');
      if (this.completed) {
        this.$emit('onchange', {
          province: this.provinceSelected,
          city: this.citySelected,
          district: this.districtSelected
        });
      } else {
        this.$emit('onchange', {
          province: this.provinceSelected[1],
          city: this.citySelected[1],
          district: this.districtSelected[1]
        });
      }
    },
    _filter: function _filter(pid) {
      var result = [];
      var items = this.$options.region[pid];
      for (var code in items) {
        result.push([parseInt(code, 10), items[code]]);
      }
      return result;
    },

    // data model: [code, name]
    _searchIndex: function _searchIndex(items, model, by) {
      // by name
      if (by === 1) {
        for (var key in items) {
          if (items[key][by].indexOf(model) > -1) {
            return key;
          }
        }
        // by code
      } else {
          for (var _key in items) {
            if (items[_key][by] === model) {
              return _key;
            }
          }
        }
    },
    _selected: function _selected(pid, model) {
      var items = this._filter(pid);
      var index = -1;
      if (typeof model === 'string') {
        index = this._searchIndex(items, model, 1);
      } else if (typeof model === 'number') {
        index = this._searchIndex(items, Number(model), 0);
      } else if (Array.isArray(model)) {
        index = this._searchIndex(items, Number(model[0]), 0);
      }
      return items[index] || [];
    }
  },

  computed: {
    provinces: function provinces() {
      return this._filter(this.rootCode);
    },
    cities: function cities() {
      return this._filter(this.provinceSelected[0]);
    },
    districts: function districts() {
      return this._filter(this.citySelected[0]);
    },
    isVueNext: function isVueNext() {
      return this.$options.vueVersion !== 1;
    },

    provinceSelected: {
      get: function get() {
        return this._selected(this.rootCode, this.current.province || this.province);
      },
      set: function set(value) {
        if (!this.isVueNext) {
          this.province = this.completed ? value : value[1];
        } else {
          this.current.province = value;
        }
      }
    },
    citySelected: {
      get: function get() {
        return this._selected(this.provinceSelected[0], this.current.city || this.city);
      },
      set: function set(value) {
        if (!this.isVueNext) {
          this.city = this.completed ? value : value[1];
        } else {
          this.current.city = value;
        }
      }
    },
    districtSelected: {
      get: function get() {
        return this._selected(this.citySelected[0], this.current.district || this.district);
      },
      set: function set(value) {
        if (!this.isVueNext) {
          this.district = this.completed ? value : value[1];
        } else {
          this.current.district = value;
        }
      }
    }
  },

  data: function data() {
    return {
      current: {
        province: '',
        city: '',
        district: ''
      }
    };
  },


  watch: {
    province: function province() {
      this.current.province = '';
    },
    city: function city() {
      this.current.city = '';
    },
    district: function district() {
      this.current.district = '';
    }
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ }
/******/ ])
});
;