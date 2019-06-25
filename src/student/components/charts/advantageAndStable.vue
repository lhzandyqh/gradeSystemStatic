<template>
  <div id="advantage"  style="width:100%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'advantageAndStable',
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value'
        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六']
        },
        series: [
          {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#71C5EA'
            },
            barWidth: 60,
            data: [320, 302, 301, 334, 390, 330]
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#D3F5F2'
            },
            barWidth: 60,
            data: [120, 132, 101, 134, 90, 230]
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#A9C8F6'
            },
            barWidth: 60,
            data: [220, 182, 191, 234, 290, 330]
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#7196B1'
            },
            barWidth: 60,
            data: [150, 212, 201, 154, 190, 330]
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
      this.chart = echarts.init(document.getElementById('advantage'))
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
