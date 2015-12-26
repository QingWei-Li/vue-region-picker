import Vue from 'vue'
import RegionPicker from '../src/vue-region-picker.vue'

describe ('RegionPicker component', () => {
  let getVM, vm, selects
  before (done => {
    getVM = (...attribute) => {
      return new Vue({
        template: `<div>
                    <form action="">
                      <region-picker
                        ${attribute}
                        :province.sync="address.province"
                        :city.sync="address.city"
                        :district.sync="address.district"
                        :data='region'
                        v-ref:picker>
                      </region-picker>
                      <input type="submit" />
                    </form>
                  </div>`,
        el: 'body',
        replace: false,
        components: {
          RegionPicker
        },
        data () {
          return {
            address: {}
          }
        },
        created () {
          this.region = require('../src/china-region.json')
        }
      })
    }
    done()
  })

  after (done => {
    vm.$destroy()
    done()
  })

  describe ('default usage', () => {
    before (done => {
      vm = getVM()
      selects = $(vm.$el).find('select')
      done()
    })

    it ('should have three select element', done => {
      expect($(vm.$el).find('select')).to.have.length(3)
      done()
    })

    it ('first select should have at last 2 option', done => {
      expect($(vm.$el).find('select').eq(0).find('option')).to.have.length.above(2)
      done()
    })

    it ('select "贵州" province, the second select should have "黔南" option', done => {
      vm.$refs.picker.provinceSelected = ['520000', '贵州省']
      vm.$nextTick(() => {
        expect( _.find(selects[1].options, item => item.innerText.indexOf('黔南') > -1)).to.be.exist
        done()
      })

    })

    it ('select "黔南" province, the second select should have "都匀" option', done => {
      vm.$refs.picker.citySelected = ['522700', '黔南布依族苗族自治州']
      vm.$nextTick(() => {
        expect( _.find(selects[2].options, item => item.innerText.indexOf('都匀') > -1)).to.be.exist
        done()
      })
    })

    it ('address value', done => {
      vm.$refs.picker.districtSelected = ['522701', '都匀市']
      vm.$nextTick(() => {
        expect(vm.address.province).to.have.string('贵州')
        expect(vm.address.city).to.have.string('黔南')
        expect(vm.address.district).to.have.string('都匀')
        done()
      })
    })

  })

  describe ('Set "auto" attribute', () => {
    before (done => {
      vm = getVM('auto')
      selects = $(vm.$el).find('select')
      done()
    })

    it ('should have one visible select element', done => {
      expect($(vm.$el).find('select:visible')).to.have.length(1)
      done()
    })

    it ('city select is visible when province select is change', done => {
      vm.$refs.picker.provinceSelected = ['440000', '广东省']
      vm.$nextTick(() => {
        expect($(vm.$el).find('select:visible')).to.have.length.above(2)
        done()
      })
    })

    it ('district select is hidden when province select is change', done => {
      vm.$refs.picker.provinceSelected = ['820000', '澳门特别行政区']
      vm.$nextTick(() => {
        expect($(vm.$el).find('select:visible')).to.have.length(2)
        done()
      })
    })

  })

  describe ('Set "required" attribute', () => {
    before (done => {
      vm = getVM('required')
      selects = $(vm.$el).find('select')
      done()
    })

    it ('first select is required', done => {
      expect(selects.eq(0).prop('required')).to.be.true
      done()
    })

    it ('other select is required when has options', done => {
      // 原先的 '北京' 换了数据文件后通不过测试，是因为 city 中的两个选项有的有地区有的没有
      // 然后不同浏览器遍历对象的顺序不太一样导致如果选中没有地区的城市就通不过测试
      vm.$refs.picker.provinceSelected = ['440000', '广东省']
      vm.$nextTick(() => {
        _.each(selects, select => {
          expect(select.required).to.be.true
        })
        done()
      })
    })

    it ('other select is required when hasn\'t options', done => {
      vm.$refs.picker.provinceSelected = ['820000', '澳门特别行政区']
      vm.$nextTick(() => {
        expect(_.last(selects).required).to.be.false
        done()
      })
    })

  })

  describe ('Set intialize value', () => {
    before (done => {
      vm = getVM(`:init="{province:  '广东', city: '广州', district: '海珠'}"`)
      selects = $(vm.$el).find('select')
      done()
    })

    it ('display initalize value', done => {
      vm.$nextTick(() => {
        expect(vm.address.province).to.have.string('广东')
        expect(vm.address.city).to.have.string('广州')
        expect(vm.address.district).to.have.string('海珠')
        done()
      })
    })

    it ('intialize value is wrong', done => {
      vm.$refs.picker.init = {province: '上海', city: '北京'}
      vm.$nextTick(() => {
        expect(vm.address.province).to.have.string('上海')
        expect(vm.address.city).to.not.string('北京')
        done()
      })
    })

  })

  describe ('Set "placeholder" attribute', () => {
    before (done => {
      vm = getVM(`:placeholder="{province: '选择省份', city: '选择城市', district: '选择地区'}"`)
      selects = $(vm.$el).find('select')
      done()
    })

    it ('placeholder is useful', done => {
      vm.$nextTick(() => {
        expect(selects[0].options[0].innerText).to.be.string('选择省份')
        expect(selects[1].options[0].innerText).to.be.string('选择城市')
        expect(selects[2].options[0].innerText).to.be.string('选择地区')
        done()
      })
    })
  })

})
