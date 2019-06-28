<template>
  <div id="singleAnalysis"  style="width:100%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
import { getSingleSubjectTimeData } from '~/api/studentGetData'
export default {
  name: 'singleSubjectAnalysis',
  data () {
    return {
      getData: [],
      getDataSpace: [],
      option: {
        // title: {
        //   text: '单科时序对比分析图'
        // },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [] // '蒸发量', '降水量', '储量'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: [] // '1月', '2月', '3月', '4月', '5月', '6月'
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '', // 储量
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#b32e2a'
              }
            },
            data: [], // 3.0, 6.9, 12.0, 20.2, 35.6, 68.7
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '', // 蒸发量
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#2f4554'
              }
            },
            data: [], // 2.0, 4.9, 7.0, 23.2, 25.6, 76.7
            markPoint: {
              data: [
                {type: 'max', name: '最大值'},
                {type: 'min', name: '最小值'}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          },
          {
            name: '', // 降水量
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#61a0a8'
              }
            },
            data: [], // 2.6, 5.9, 9.0, 26.4, 28.7, 70.7
            markPoint: {
              data: [
                {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
              ]
            },
            markLine: {
              data: [
                {type: 'average', name: '平均值'}
              ]
            }
          }
        ]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      const prams = {
        user_id: window.localStorage.getItem('id')
      }
      getSingleSubjectTimeData(prams).then(response => {
        this.getData = response.data.info
        let i = 0
        let k = 1
        console.log(this.getData.length)
        console.log(this.getData[1][0].examType)
        this.option.legend.data.push(this.getData[1][0].examtype)
        this.option.series[0].name = this.getData[1][0].examtype
        this.option.legend.data.push(this.getData[1][1].examtype)
        this.option.series[1].name = this.getData[1][1].examtype
        this.option.legend.data.push(this.getData[1][2].examtype)
        this.option.series[2].name = this.getData[1][2].examtype
        while (i < this.getData.length) {
          this.option.xAxis[0].data.push(this.getData[i].subject)
          // this.getDataSpace = this.getData[k]
          // while (a < this.getDataSpace.length) {
          //   this.option.series[a].data.push(this.getDataSpace[a].score)
          //   a = a + 1
          // }
          // let a = 0
          // while (a < this.getData[k].length) {
          //   this.option.series[0].data.push(this.getData[k][a].score)
          //   this.option.series[1].data.push(this.getData[k][a].score)
          //   this.option.series[2].data.push(this.getData[k][a].score)
          //   a = a + 1
          // }
          console.log('循环开始检查k')
          console.log(k)
          this.option.series[0].data.push(this.getData[k][0].score)
          console.log('检测值')
          console.log(k)
          console.log(this.getData[k][0].score)
          this.option.series[1].data.push(this.getData[k][1].score)
          console.log('检测值')
          console.log(this.getData[k][1].score)
          console.log(k)
          this.option.series[2].data.push(this.getData[k][2].score)
          console.log('检测值')
          console.log(this.getData[k][2].score)
          console.log(k)
          i = i + 2
          k = k + 2
        }
        // console.log(this.getData[1][0].score)
        this.chart = echarts.init(document.getElementById('singleAnalysis'))
        this.chart.setOption(this.option)
      })
      // this.chart = echarts.init(document.getElementById('singleAnalysis'))
      // this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
