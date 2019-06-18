<template>
  <div class="container">
    <el-radio-group v-model="radio" @change="schoolOrClass">
      <el-radio :label="1">班级</el-radio>
      <el-radio :label="2">学校</el-radio>
    </el-radio-group>
    <div id="weakspot"  style="width:100%;height: 100%;padding-top: 20px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
import { getClassGradeByondRate, getSchoolGradeByondRate } from '~/api/studentGetData'
export default {
  name: 'weakSpot',
  data () {
    return {
      chart: null,
      radio: 1,
      beyondDataSpace: [],
      beyondDataSchool: [],
      testData: [],
      option: {
        tooltip: {},
        legend: {
          data: ['总分超越率', '单科超越率']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '语文', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '数学', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '英语', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '物理', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '化学', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '生物', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '历史', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '地理', max: 1},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '政治', max: 1}
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [],
              name: '总分超越率'
            },
            {
              value: [],
              name: '单科超越率'
            }
          ]
        }]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    schoolOrClass: function () {
      console.log(this.radio)
      if (this.radio === 2) {
        this.initSchoolChart()
        console.log('我是学校表')
      } else {
        this.initClassChart()
        console.log('我是班级表')
      }
    },
    deletechart () {
      var node = document.getElementById('weakspot')
      document.parentNode.removeChild(node)
    },
    initChart () {
      const prams = {
        userID: 235
      }
      getClassGradeByondRate(prams).then(response => {
        // console.log(response.data.info)
        this.beyondDataSpace = response.data.info
        console.log(this.beyondDataSpace)
        console.log(this.beyondDataSpace.byondRate)
        var i = 1
        while (i < 10) {
          this.option.series[0].data[0].value.push(this.beyondDataSpace.byondRate)
          i++
        }
        // console.log(this.option.series[0].data[0])
        this.option.series[0].data[1].value.push(this.beyondDataSpace.yuwenByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.shuxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.yingyuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.wuliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.huaxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.shengwuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.lishiByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.diliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.zhengzhiByrate)
        console.log(this.option.series[0].data[1])
        this.chart = echarts.init(document.getElementById('weakspot'))
        this.chart.setOption(this.option)
      })
    },
    initClassChart () {
      const prams = {
        userID: 235
      }
      getClassGradeByondRate(prams).then(response => {
        // console.log(response.data.info)
        this.beyondDataSpace = response.data.info
        console.log(this.beyondDataSpace)
        console.log(this.beyondDataSpace.byondRate)
        var i = 1
        this.option.series[0].data[0].value = []
        while (i < 10) {
          this.option.series[0].data[0].value.push(this.beyondDataSpace.byondRate)
          i++
        }
        this.option.series[0].data[1].value = []
        // console.log(this.option.series[0].data[0])
        this.option.series[0].data[1].value.push(this.beyondDataSpace.yuwenByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.shuxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.yingyuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.wuliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.huaxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.shengwuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.lishiByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.diliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSpace.zhengzhiByrate)
        console.log(this.option.series[0].data[1])
        this.chart = echarts.init(document.getElementById('weakspot'))
        this.chart.setOption(this.option)
      })
    },
    initSchoolChart () {
      const prams = {
        userID: 235
      }
      getSchoolGradeByondRate(prams).then(response => {
        // console.log(response.data.info)
        this.beyondDataSchool = response.data.info
        console.log(this.beyondDataSchool)
        console.log(this.beyondDataSchool.byondRate)
        var i = 1
        this.option.series[0].data[0].value = []
        while (i < 10) {
          this.option.series[0].data[0].value.push(this.beyondDataSchool.byondRate)
          i++
        }
        this.option.series[0].data[1].value = []
        // console.log(this.option.series[0].data[0])
        this.option.series[0].data[1].value.push(this.beyondDataSchool.yuwenByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.shuxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.yingyuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.wuliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.huaxueByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.shengwuByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.lishiByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.diliByrate)
        this.option.series[0].data[1].value.push(this.beyondDataSchool.zhengzhiByrate)
        console.log(this.option.series[0].data[1])
        this.chart = echarts.init(document.getElementById('weakspot'))
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
