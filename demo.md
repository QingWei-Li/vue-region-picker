<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/vue/1.0.12/vue.min.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/QingWei-Li/vue-region-picker/master/dist/main.js"></script>
<script type="text/javascript" src="https://cdn.rawgit.com/QingWei-Li/vue-region-picker/master/dist/data.js"></script>
<link rel="stylesheet" href="stylesheets/github-light.css">

# Basic

html

```vue
<body>
  <region-picker
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>
```

javascript

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

<demo1>
  <region-picker
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</demo1>

<script>
new Vue({
  el: 'demo1',
  data: {
    region: {},
  },
  created() {
    this.regionData = RegionPicker.data;
  },
  components: {
    RegionPicker: RegionPicker.main
  }
});
</script>

-------------

# Auto display
```vue
<body>
  <region-picker
    auto
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>
```

<demo2>
  <region-picker
    auto
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</demo2>

<script>
new Vue({
  el: 'demo2',
  data: {
    region: {},
  },
  created() {
    this.regionData = RegionPicker.data;
  },
  components: {
    RegionPicker: RegionPicker.main
  }
});
</script>


----------

# Set initial value
```vue
<body>
  <region-picker
    :init="{province: '广东', city: '广州', district: '海珠'}"
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>
```

<demo3>
  <region-picker
    :init="{province: '广东', city: '广州', district: '海珠'}"
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</demo3>

<script>
new Vue({
  el: 'demo3',
  data: {
    region: {},
  },
  created() {
    this.regionData = RegionPicker.data;
  },
  components: {
    RegionPicker: RegionPicker.main
  }
});
</script>

---------

# Set placeholder
```vue
<body>
  <region-picker
    :init="{province: '广东', city: '广州', district: '海珠'}"
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>
```

<demo4>
  <region-picker
    :placeholder="{province: '选择省份', city: '选择市', district: '选择地区'}"
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</demo4>

<script>
new Vue({
  el: 'demo4',
  data: {
    region: {},
  },
  created() {
    this.regionData = RegionPicker.data;
  },
  components: {
    RegionPicker: RegionPicker.main
  }
});
</script>

--------

# you can use globals

```vue
<body>
  <region-picker
    :province.sync="region.province"
    :city.sync="region.city"
    :district.sync="region.district"
    :data="regionData">
  </region-picker>
</body>

<script src="/path/vue.js"></script>
<script src="/path/vue-region-picker/dist/main.js"></script>
<script src="/path/vue-region-picker/dist/data.js"></script>
<script type="text/javascript">
  new Vue({
    el: 'body',
    data: {
      region: {},
    },
    created() {
      this.regionData = RegionPicker.data;
    },
    components: {
      RegionPicker: RegionPicker.main
    }
  });
</script>
```

