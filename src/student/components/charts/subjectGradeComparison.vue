<template>
  <div id="gradecomparison"  style="width:60%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
import { getSubjectGradeTable } from '~/api/studentGetData'
export default {
  name: 'subjectGradeComparison',
  data () {
    return {
      chart: null,
      processedData: [],
      chartData: [],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#19c237'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['我的得分', '班平均分', '校平均分']
        },
        xAxis: [
          {
            type: 'category',
            data: [],
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 150,
            interval: 30,
            axisLabel: {
              formatter: '{value}'
            }
          },
          {
            type: 'value',
            name: '分数',
            min: 0,
            max: 150,
            interval: 30,
            axisLabel: {
              formatter: '{value}'
            }
          }
        ],
        series: [
          {
            name: '我的得分',
            type: 'bar',
            data: [],
            itemStyle: {
              normal: {color: '#2fb111'}
            }
          },
          {
            name: '班平均分',
            type: 'line',
            data: []
          },
          {
            name: '校平均分',
            type: 'line',
            yAxisIndex: 1,
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
        userID: window.localStorage.getItem('id')
      }
      getSubjectGradeTable(prams).then(response => {
        this.chartData = response.data.info
        let i = 1
        while (i < this.chartData.length) {
          this.processedData.push(this.chartData[i])
          i++
        }
        console.log(this.chartData)
        // eslint-disable-next-line no-unused-vars
        var k = ''
        for (k in this.processedData) {
          this.option.xAxis[0].data.push(this.processedData[k].subjectName)
          this.option.series[0].data.push(this.processedData[k].score)
          this.option.series[1].data.push(this.processedData[k].classArg)
          this.option.series[2].data.push(this.processedData[k].schoolArg)
        }
        console.log(this.option.xAxis[0].data)
        console.log(this.option.series[0].data)
        console.log(this.option.series[1].data)
        console.log(this.option.series[2].data)
        this.chart = echarts.init(document.getElementById('gradecomparison'))
        this.chart.setOption(this.option)
      })
      console.log(this.chartData)
    }
  }
}
</script>

<style scoped>
</style>
