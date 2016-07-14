# vue-region-picker demo - Vue2.0

## Basic

Vue2 取消了双向绑定，无法再使用 sync 同步，因此这里通过 onchange 获取选中的数据，返回结果类似 `{ "district": [ 440105, "海珠区" ], "city": [ 440100, "广州市" ], "province": [ 440000, "广东省" ] }`

<region-picker
  :province="region1.province"
  :city="region1.city"
  :district="region1.district"
  @onchange="change">
</region-picker>


html

```html
<region-picker
  :province="region.province"
  :city="region.city"
  :district="region.district"
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
  el: '#app',

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
  :province="region2.province"
  :city="region2.city"
  :district="region2.district"
  @onchange="change">
</region-picker>

```html
<region-picker
  auto
  :province="region.province"
  :city="region.city"
  :district="region.district"
  @onchange="change">
</region-picker>
```


## Set initial value

<region-picker
  :province="region3.province"
  :city="region3.city"
  :district="region3.district"
  @onchange="change">
</region-picker>

<label for="">单项绑定赋值</label>
<input type="text" v-model="region3.province">
<input type="text" v-model="region3.city">
<input type="text" v-model="region3.district"
@onchange="change">
<br>

html

```html
<region-picker
  :province="region.province"
  :city="region.city"
  :district="region.district"
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
  el: '#app',

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
  :province="region4.province"
  :city="region4.city"
  :district="region4.district"
  @onchange="change">
</region-picker>

html
```html
<region-picker
  :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}"
  :province="region.province"
  :city="region.city"
  :district="region.district"
  @onchange="change">
</region-picker>
```

## Two select 二级联动(province, city)

<region-picker
  two-select
  :province="region5.province"
  :city="region5.city"
  @onchange="change">
</region-picker>

html
```html
<region-picker
  two-select
  :province="region.province"
  :city="region.city"
  @onchange="change">
</region-picker>
```
