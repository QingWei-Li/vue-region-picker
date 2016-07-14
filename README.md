# vue-region-picker
[![Build Status](https://travis-ci.org/QingWei-Li/vue-region-picker.svg)](https://travis-ci.org/QingWei-Li/vue-region-picker)
[![npm](https://img.shields.io/npm/v/vue-region-picker.svg?maxAge=3600)](https://www.npmjs.com/package/vue-region-picker)
![](https://badge-size.herokuapp.com/qingwei-li/vue-region-picker/master/dist/app.js)

> A Vue.js Component for picking provinces, cities and districts of China.

**Supports both Vue 1.x and 2.0!**

## Demo
- [Vue1.x](http://qingwei-li.github.io/vue-region-picker)
- [Vue2.0](http://qingwei-li.github.io/vue-region-picker/vue2)

## Requirements
- [Vue ^1.0.12](https://github.com/vuejs/vue)

## Area data
- China [china-area-data](https://github.com/airyland/china-area-data)

## Install
```shell
$ npm install vue-region-picker china-area-data --save
```

## Usage

html

```html
<body>
  <!-- Vue1.x -->
  <region-picker
    :province.sync="province"
    :city.sync="city"
    :district.sync="district">
  </region-picker>
  <!-- Vue2 -->
  <region-picker
    :province="province"
    :city="city"
    :district="district"
    @onchange="change">
  </region-picker>
</body>
```

javascript

```javascript
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

Vue.use(RegionPicker, {
  region: REGION_DATA,
  vueVersion: 1 // or 2, default 1
})

// Vue1.x
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
import { RegionPicker } from 'vue-region-picker'
import REGION_DATA from 'china-area-data'

RegionPicker.region = REGION_DATA
// RegionPicker.vueVersion = 1 // or 2, default 1

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

## Options
| name               | description                                              | Type                | default Value |
|--------------------|----------------------------------------------------------|-------------------|-------------|
| region | region data | Object | - |
| vueVersion | vue version, 1 or 2 | Number | 1 |

## Props
| name               | description                                              | Type                | default Value |
|--------------------|----------------------------------------------------------|-------------------|-------------|
| province              | Bind province. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.      | Number, String |  |
| city              | Bind city. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`.     | Number, String |  |
| district              | Bind district. You can set the initial value or not. Set the initial value by `(number)code` or `(string)name`. | Number, String |  |
| placeholder              | Placeholder  | Object | `{ province: '请选择', city: '请选择', district: '请选择'}`  |
| auto              | If empty option will automatically hide.  | Boolean | false  |
| required              | Required if the option is not empty.  | Boolean | false  |
| completed              | Allow the return value is complete, it contains an array of code(number) and name(string). e.g. `{ "district": [ 440105, "海珠区" ], "city": [ 440100, "广州市" ], "province": [ 440000, "广东省" ] }` | Boolean | false  |
| disabled              | disabled  | Boolean | false  |
| two-select              | If true, display only `province` and `city`  | Boolean | false  |
| onchange | selected callback | Function | |

## Slots
| name               | description  |
|--------------------|--------------|
| province              |  province label |
| city              |  city label |
| district              |  district label |

```javascript
<region-picker
  :province.sync="address.province"
  :city.sync="address.city"
  :district.sync="address.district">
  <span slot="province">省份</span>
  <span slot="city">城市</span>
  <span slot="district">地区</span>
</region-picker>
```

## Development
```shell
$ npm i cooking -g
$ npm run dev
```

## Testing and Building

```shell
$ npm test
$ npm run dist
```

## License
[WTFPL](https://github.com/QingWei-Li/vue-region-picker/blob/master/LICENSE)
