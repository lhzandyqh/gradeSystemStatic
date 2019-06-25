<template>
  <div id="singleAnalysis"  style="width:100%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'singleSubjectAnalysis',
  data () {
    return {
      option: {
        title: {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['蒸发量', '降水量', '储量']
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
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '储量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#31655A'
              }
            },
            data: [3.0, 6.9, 12.0, 20.2, 35.6, 68.7],
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
            name: '蒸发量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#AED75D'
              }
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7],
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
            name: '降水量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: '#E0EC89'
              }
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7],
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
      this.chart = echarts.init(document.getElementById('singleAnalysis'))
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
