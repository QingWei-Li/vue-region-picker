#vue-region-picker
[![Build Status](https://travis-ci.org/QingWei-Li/vue-region-picker.svg)](https://travis-ci.org/QingWei-Li/vue-region-picker)
[![Coverage Status](https://coveralls.io/repos/QingWei-Li/vue-region-picker/badge.svg?branch=master&service=github)](https://coveralls.io/github/QingWei-Li/vue-region-picker?branch=master)
[![npm](https://img.shields.io/npm/v/vue-region-picker.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-region-picker)

> A Vue.js Component for picking provinces, cities and districts of China.

## Demo
[HERE](http://qingwei-li.github.io/vue-region-picker/demo.html)

## Requirements
- [Vue ^1.0.12](https://github.com/vuejs/vue)

## Install
- npm

```shell
$ npm install vue-region-picker --save
```

## Usage

- html

```html
<body>
  <region-picker
    :province.sync="province"
    :city.sync="city"
    :district.sync="district">
  </region-picker>
</body>
```

- javascript

```javascript
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'vue-region-picker/data'

Vue.use(RegionPicker, {
  region: REGION_DATA
})

new Vue({
  el: 'body',

  data () {
    return {
      province: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
      district: ''
    }
  }
})
```

Or

```javascript
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'vue-region-picker/data'

RegionPicker.region = REGION_DATA

new Vue({
  el: 'body',

  data () {
    return {
      province: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
      district: ''
    }
  },

  components: { RegionPicker }
})
```

## Properties
### `province`
- Type: `Number/String`
- Required: `true`
- twoWay: `true`

Bind province. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `city`
- Type: `Number/String`
- Required: `true`
- twoWay: `true`

Bind city. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `district`
- Type: `Number/String`
- twoWay: `true`

Bind district. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `placeholder`
- Type: `Object`
- Default: `{ province: '请选择', city: '请选择', district: '请选择'}`

Show placeholder.

### `auto`
- Type: `Boolean`
- Default: `false`

If empty option will automatically hide.

### `required`
- Type: `Boolean`
- Default: `false`

Required if the option is not empty.

### `completed`
- Type: `Boolean`
- Default: `false`

Allow the return value is complete, it contains an array of code(number) and name(string).

e.g. `{ "district": [ 440105, "海珠区" ], "city": [ 440100, "广州市" ], "province": [ 440000, "广东省" ] }`

### `disabled`
- Type: `Boolean`
- Default: `false`

disabled attribute

### `two-select`
- Type: `Boolean`
- Default: `false`

If true, display only `province` and `city`

## Slot
- province
- city
- district

example
```javascript
<region-picker
  :province.sync="address.province"
  :city.sync="address.city"
  :district.sync="address.district"
  :data='region'>
  <span slot="province">省份</span>
  <span slot="city">城市</span>
  <span slot="district">地区</span>
</region-picker>
```

## Development
```shell
$ npm start
```

## Testing and Building

```shell
$ npm test
$ npm run build
```

## License
[WTFPL](https://github.com/QingWei-Li/vue-region-picker/blob/master/LICENSE)
