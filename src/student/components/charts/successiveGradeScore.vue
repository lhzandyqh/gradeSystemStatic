<template>
  <div id="successivegrade"  style="width:50%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'successiveGradeScore',
  data () {
    return {
      chart: null
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      this.chart = echarts.init(document.getElementById('successivegrade'))
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['班级等级分', '学校等级分']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['第一次月考', '第二次月考', '期中考试', '期末考试']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '班级等级分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [83, 78, 91, 87, 90]
          },
          {
            name: '学校等级分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [76, 74, 83, 86]
          }
        ]
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
