# vue-region-picker demo

## Basic

<region-picker
  :province.sync="region1.province"
  :city.sync="region1.city"
  :district.sync="region1.district"
  @onchange="change">
</region-picker>


html

```html
<region-picker
  :province.sync="region.province"
  :city.sync="region.city"
  :district.sync="region.district"
  @onchange="change">
</region-picker>
```

javascript

```javascript
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import CHINA_REGION from 'china-area-data'

Vue.use(RegionPicker, {
  region: CHINA_REGION,
  vueVersion: 2
})

new Vue({
  el: 'body',

  data: {
    return {
      region: {}
    }
  }
})
```

## Auto display
<region-picker
  auto
  :province.sync="region2.province"
  :city.sync="region2.city"
  :district.sync="region2.district"
  @onchange="change">
</region-picker>

```html
<region-picker
  auto
  :province.sync="region.province"
  :city.sync="region.city"
  :district.sync="region.district"
  @onchange="change">
</region-picker>
```


## Set initial value

<region-picker
  :province.sync="region3.province"
  :city.sync="region3.city"
  :district.sync="region3.district"
  @onchange="change">
</region-picker>

<label for="">同时支持双向绑定</label>
<input type="text" v-model="region3.province">
<input type="text" v-model="region3.city">
<input type="text" v-model="region3.district"
@onchange="change">
<br>

html

```html
<region-picker
  :province.sync="region.province"
  :city.sync="region.city"
  :district.sync="region.district"
  @onchange="change">
</region-picker>
```

javascript

```javascript
import Vue from 'vue'
import RegionPicker from 'vue-region-picker'
import CHINA_REGION from 'china-area-data'

Vue.use(RegionPicker, {
  region: CHINA_REGION,
  vueVersion: 2
})

new Vue({
  el: 'body',

  data: {
    return {
      region: {
        province: '广东', // 可以通过名字，不需要填写完整
        city: 440300, // 也可以通过 (number) code
        district: '钢铁侠' // 填写错误的信息默认不处理
      }
    }
  }
})
```

## Set placeholder
<region-picker
  :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}"
  :province.sync="region4.province"
  :city.sync="region4.city"
  :district.sync="region4.district"
  @onchange="change">
</region-picker>

html
```html
<region-picker
  :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}"
  :province.sync="region.province"
  :city.sync="region.city"
  :district.sync="region.district"
  @onchange="change">
</region-picker>
```

## Two select 二级联动(province, city)

<region-picker
  two-select
  :province.sync="region5.province"
  :city.sync="region5.city"
  @onchange="change">
</region-picker>

html
```html
<region-picker
  two-select
  :province.sync="region.province"
  :city.sync="region.city"
  @onchange="change">
</region-picker>
```
