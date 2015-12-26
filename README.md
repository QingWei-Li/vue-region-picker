
#vue-region-picker

[![Build Status](https://travis-ci.org/QingWei-Li/vue-region-picker.svg)](https://travis-ci.org/QingWei-Li/vue-region-picker)
[![Coverage Status](https://coveralls.io/repos/QingWei-Li/vue-region-picker/badge.svg?branch=master&service=github)](https://coveralls.io/github/QingWei-Li/vue-region-picker?branch=master)
[![NPM](https://nodei.co/npm/vue-region-picker.png)](https://nodei.co/npm/vue-region-picker/)

A Vue.js Component for picking provinces, cities and districts of China.

## Demo
[HERE](http://qingwei-li.github.io/vue-region-picker/demo.html)

## Requirements
- [Vue](https://github.com/vuejs/vue)

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
    region: {},
  },
  created() {
    this.regionData = REGION_DATA;
  },
  components: {
    RegionPicker: RegionPicker
  }
});
```


## Properties
### `provice`
- Required: `required`
- twoWay: `true`

Bind province. DON'T use it set the inital value, please use `init` prop.

### `city`
- Required: `required`
- twoWay: `true`

Bind city. DON'T use it set the inital value, please use `init` prop.

### `district`
- Required: `required`
- twoWay: `true`

Bind district. DON'T use it set the inital value, please use `init` prop.

### `data`
- Required: `required`
- Type: `Object`

China Region data. Of course, you can customize.
Data Source: [https://github.com/fengyuanchen/distpicker](https://github.com/fengyuanchen/distpicker)

### `placeholder`
- Type: `Object`
- Default: `{ province: '请选择', city: '请选择', district: '请选择'}`

Show placeholder.

### `init`
- Type: `Object`

Bind the inital value. e.g. `init:{province: '广州', city:'广东', district: '海珠'}`,
 Don't worry about whether or not to write complete, It will own resolve. Do NOT
 use the `province`, `city` or `district` properties to set an initial value, It is useless.

### `auto`
- Type: `Boolean`
- Default: `false`

If empty option will automatically hide.

### `required`
- Type: `Boolean`
- Default: `false`

Required if the option is not empty.

## Testing and Building

```shell
$ npm test
$ npm run build
```

## License
[WTFPL](https://github.com/QingWei-Li/vue-region-picker/blob/master/LICENSE)
