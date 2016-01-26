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
        expect($(vm.$el).find('select:visible')).to.have.length.above(1)
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
          if (select.options.length > 1) {
            expect(select.required).to.be.true
          }
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

  // init attribute is deprecated.
  describe ('Set intialize value by "init" attribute', () => {
    before (done => {
      vm = getVM(`:init="{province: '广东', city: '广州', district: '海珠'}"`)
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
        expect(vm.address.city).to.be.undefined
        done()
      })
    })

  })

  describe ('Set intialize value', () => {

    it ('display initalize value', done => {
      vm = getVM(`:province.sync="testAddress.province" :city.sync="testAddress.city" :district.sync="testAddress.district"`)
      selects = $(vm.$el).find('select')

      vm.$nextTick(() => {
        expect(vm.testAddress.province).to.have.string('广东')
        expect(vm.testAddress.city).to.have.string('广州')
        expect(vm.testAddress.district).to.have.string('海珠')
        done()
      })
    })

    it ('intialize value is wrong', done => {
      vm = getVM(`:province.sync="wrongAddress.province" :city.sync="wrongAddress.city" :district.sync="wrongAddress.district"`)
      selects = $(vm.$el).find('select')

      vm.$refs.picker.$nextTick(() => {
        expect(vm.wrongAddress.province).to.have.undefined
        expect(vm.wrongAddress.city).to.have.undefined
        expect(vm.wrongAddress.district).to.have.undefined
        done()
      })
    })

    it ('dont change value when component is created', done => {
      vm = getVM(`:province.sync="testAddress.province" :city.sync="testAddress.city" :district.sync="testAddress.district"`)
      vm.testAddress = {
        province: '贵州',
        city:  '黔南',
        district: '都匀'
      }
      selects = $(vm.$el).find('select')

      vm.$refs.picker.$nextTick(() => {
        expect(vm.$refs.picker.province).to.have.string('广东')
        expect(vm.$refs.picker.city).to.have.string('广州')
        expect(vm.$refs.picker.district).to.have.string('海珠')
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

  describe('Set "disabled" attribute', done => {
    before(done => {
      vm = getVM(`disabled`)
      selects = $(vm.$el).find(`select`)
      done()
    })

    it('select element is disabled', done => {
      vm.$nextTick(() => {
        _.each(selects, select => {
          expect(select.disabled).to.be.true
        })
        done()
      })
    })
  })

  describe('Set "completed" attribute', done => {
    before(done => {
      vm = getVM(`completed :init="{province: '广东', city: '广州', district: '海珠'}"`)
      selects = $(vm.$el).find(`select`)
      done()
    })

    it('return value is complete', done => {
      vm.$nextTick(() => {
        expect(vm.address.province).to.have.length(2)
        expect(vm.address.province[0]).to.equal(440000)
        expect(vm.address.province[1]).to.have.string('广东')
        expect(vm.address.city).to.have.length(2)
        expect(vm.address.city[0]).to.equal(440100)
        expect(vm.address.city[1]).to.have.string('广州')
        expect(vm.address.district).to.have.length(2)
        expect(vm.address.district[0]).to.equal(440105)
        expect(vm.address.district[1]).to.have.string('海珠')
        done()
      })
    })
  })

  describe('intialize value by code', done => {
    before(done => {
      vm = getVM(`:init="{province: 440000, city: 440100, district: 440105}"`)
      selects = $(vm.$el).find(`select`)
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

  })

  describe('intialize value by code and name', done => {
    before(done => {
      vm = getVM(`:init="{province: 440000, city: 440100, district: '海珠'}"`)
      selects = $(vm.$el).find(`select`)
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
  })

})
