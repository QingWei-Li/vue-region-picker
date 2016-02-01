
#vue-region-picker

[![Build Status](https://travis-ci.org/QingWei-Li/vue-region-picker.svg)](https://travis-ci.org/QingWei-Li/vue-region-picker)
[![Coverage Status](https://coveralls.io/repos/QingWei-Li/vue-region-picker/badge.svg?branch=master&service=github)](https://coveralls.io/github/QingWei-Li/vue-region-picker?branch=master)
[![NPM](https://nodei.co/npm/vue-region-picker.png)](https://nodei.co/npm/vue-region-picker/)

A Vue.js Component for picking provinces, cities and districts of China.

## Demo
[HERE](http://qingwei-li.github.io/vue-region-picker/demo.html)

## Requirements
- [Vue ^1.0.16](https://github.com/vuejs/vue)

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
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>
```

- javascript

```javascript
var Vue = require('Vue');
var RegionPicker = require('vue-region-picker');
var REGION_DATA = require('vue-region-picker/data');

new Vue({
  el: 'body',
  data: {
    region: {
      provice: '广东', // you can set initial value or not.
      city: 440100, // by code or name.
    },
  },
  created() {
    this.regionData = REGION_DATA;
  },
  components: { RegionPicker }
});
```


## Properties
### `provice`
- Required: `required`
- twoWay: `true`

Bind province. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `city`
- Required: `required`
- twoWay: `true`

Bind city. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `district`
- Required: `required`
- twoWay: `true`

Bind district. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.

### `data`
- Required: `required`
- Type: `Object`

China Region data. Of course, you can customize.
Data Source: [https://github.com/fengyuanchen/distpicker](https://github.com/fengyuanchen/distpicker)

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

## Testing and Building

```shell
$ npm test
$ npm run build
```

## License
[WTFPL](https://github.com/QingWei-Li/vue-region-picker/blob/master/LICENSE)
