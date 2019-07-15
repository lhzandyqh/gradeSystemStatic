<template>
  <div class="app-container">
    <div class="title">
      <span style="font-weight: bold;color: #19c237">─10分一档统计表─</span>
    </div>
    <div id="ten" style="width:100%;height: 400px"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'tenScoreStatisChart',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      for (let i = 0; i < 25; i++) {
        this.option.xAxis.data.push(i * 30)
        this.option.series[0].data.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5)
      }
      this.chart = echarts.init(document.getElementById('ten'), 'macarons')
      this.chart.setOption(this.option)
    }
  },
  data () {
    return {
      xAxisData: [],
      data1: [],
      data2: [],
      option: {
        title: {
        },
        legend: {
          data: ['区间人数'],
          align: 'left'
        },
        toolbox: {
          // y: 'bottom',
          feature: {
            magicType: {
              type: ['stack']
            },
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            }
          }
        },
        tooltip: {},
        xAxis: {
          data: [],
          silent: false,
          splitLine: {
            show: false
          }
        },
        yAxis: {
        },
        series: [{
          name: '区间人数',
          type: 'bar',
          data: [],
          animationDelay: function (idx) {
            return idx * 10
          }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
          return idx * 5
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
