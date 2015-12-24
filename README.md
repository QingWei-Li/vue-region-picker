
#vue-region-picker

[![Build Status](https://travis-ci.org/QingWei-Li/vue-region-picker.svg)](https://travis-ci.org/QingWei-Li/vue-region-picker)

A Vue.js Component for picking provinces, cities and districts of China.

## Demo
[HERE](http://qingwei-li.github.io/vue-region-picker/example.html)

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

### `city`
- Required: `required`
- twoWay: `true`

### `district`
- Required: `required`
- twoWay: `true`

### `data`
- Required: `required`
- Type: `Object`

### `placeholder`
- Type: `Object`
- Default: `{ province: '请选择', city: '请选择', district: '请选择'}`

### `init`
- Type: `Object`

### `auto`
- Type: `Boolean`
- Default: `false`

### `required`
- Type: `Boolean`
- Default: `false`

## Testing and Building

```shell
$ npm test
$ npm run build
```

## License
MIT
