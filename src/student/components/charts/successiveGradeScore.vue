<template>
  <div id="successivegrade"  style="width:50%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
import { getSuccessiveGradeTable } from '~/api/studentGetData'
export default {
  name: 'successiveGradeScore',
  data () {
    return {
      chart: null,
      option: {
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
          data: ['成绩原始分', '班级排名']
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
            data: []
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '成绩原始分',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: []
          },
          {
            name: '班级排名',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: []
          }
        ]
      }
    }
  },
  mounted () {
    this.initChart()
  },
  methods: {
    initChart () {
      const prams = {
        userID: 1
      }
      getSuccessiveGradeTable(prams).then(response => {
        var k = ''
        for (k in response.data.info) {
          this.option.xAxis[0].data.push(response.data.info[k].examName)
          this.option.series[0].data.push(response.data.info[k].coversionTotal)
          this.option.series[1].data.push(response.data.info[k].classIndex)
        }
        this.chart = echarts.init(document.getElementById('successivegrade'))
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
