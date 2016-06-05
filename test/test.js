import test from 'ava'
import Vue from 'vue'
import RegionPicker from '../dist/main.js'
import region from '../dist/data.js'
import _ from 'lodash'

const getVM = function (attr) {
  RegionPicker.region = region

  return new Vue({
    template: `<div>
                <form action="">
                  <region-picker
                    ${attr}
                    :province.sync="address.province"
                    :city.sync="address.city"
                    :district.sync="address.district"
                    v-ref:picker>
                  </region-picker>
                  <input type="submit" />
                </form>
              </div>`,
    el() {
      return document.createElement('div')
    },
    components: {
      RegionPicker
    },
    data () {
      return {
        address: {},
        testAddress: {
          province: '广东',
          city: '广州',
          district: '海珠'
        },
        wrongAddress: {
          province: '广州',
          city: '广东',
          district: '海珠'
        }
      }
    }
  })
}

test('default usage: should have three select element', t => {
  const vm = getVM()
  const selects = vm.$el.querySelectorAll('select')

  t.is(selects.length, 3)
  vm.$destroy()
})

test('default usage: first select should have at last 2 option', t => {
  const vm = getVM()
  const options = vm.$el.querySelector('select').querySelectorAll('option')

  t.true(options.length > 2)
  vm.$destroy()
})

test('default usage: select "贵州" province, the second select should have "黔南" option', t => {
  const vm = getVM()

  vm.$refs.picker.provinceSelected = ['520000', '贵州省']

  return new Promise(resolve => {
    vm.$nextTick(() => {
      resolve(_.findIndex(vm.$el.querySelectorAll('select')[1].options, item => item.text.indexOf('黔南') > -1))
    })
  }).then(result => {
    t.true(result > 0)
    vm.$destroy()
  })
})


test('default usage: select "黔南" province, the second select should have "都匀" option', t => {
  const vm = getVM()
  vm.$refs.picker.provinceSelected = ['520000', '贵州省']
  vm.$refs.picker.citySelected = ['522700', '黔南布依族苗族自治州']

  return new Promise(resolve => {
    vm.$nextTick(() => {
      resolve(_.findIndex(vm.$el.querySelectorAll('select')[2].options, item => item.text.indexOf('都匀') > -1))
    })
  }).then(result => {
    t.true(result > 0)
    vm.$destroy()
  })
})

test('default usage: address value', t => {
  const vm = getVM()

  vm.$refs.picker.provinceSelected = ['520000', '贵州省']
  vm.$refs.picker.citySelected = ['522700', '黔南布依族苗族自治州']
  vm.$refs.picker.districtSelected = ['522701', '都匀市']

  t.regex(vm.address.province, /贵州/)
  t.regex(vm.address.city, /黔南/)
  t.regex(vm.address.district, /都匀/)
  vm.$destroy()
})

test('Set "auto" attribute: should have one visible select element', t => {
  const vm = getVM('auto')

  t.is($(vm.$el).find('label[style!="display: none;"]').length, 1)
  vm.$destroy()
})

test('Set "auto" attribute: city select is visible when province select is change', t => {
  const vm = getVM('auto')
  vm.$refs.picker.provinceSelected = ['440000', '广东省']

  return new Promise(resolve => {
    vm.$nextTick(() => {
      resolve($(vm.$el).find('label[style!="display: none;"]').length)
    })
  }).then(result => {
    t.true(result > 1)
    vm.$destroy()
  })
})

test('Set "auto" attribute: district select is hidden when province select is change', t => {
  const vm = getVM('auto')
  vm.$refs.picker.provinceSelected = ['820000', '澳门特别行政区']

  return new Promise(resolve => {
    vm.$nextTick(() => {
      resolve($(vm.$el).find('label[style!="display: none;"]').length)
    })
  }).then(result => {
    t.is(result, 2)
    vm.$destroy()
  })
})

test('Set "required" attribute: first select is required', t => {
  const vm = getVM('required')
  const selects = $(vm.$el).find('select')

  t.true(selects.eq(0).prop('required'))
  vm.$destroy()
})

test('Set "required" attribute: other select is required when has options', t => {
  const vm = getVM('required')
  const selects = $(vm.$el).find('select')

  vm.$refs.picker.provinceSelected = ['440000', '广东省']

  return new Promise(resolve => {
    vm.$nextTick(() => {
     resolve(_.find(selects, select => select.options.length > 1))
    })
  }).then(result => {
    t.truthy(result)
    vm.$destroy()
  })
})

test('Set "required" attribute: other select is required when hasn\'t options', t => {
  const vm = getVM('required')
  const selects = $(vm.$el).find('select')

  vm.$refs.picker.provinceSelected = ['820000', '澳门特别行政区']

  return new Promise(resolve => {
    vm.$nextTick(() => {
      resolve(_.last(selects).required)
    })
  }).then(result => {
    t.false(result)
    vm.$destroy()
  })
})

