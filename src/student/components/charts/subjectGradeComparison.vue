<template>
  <div id="gradecomparison"  style="width:60%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'subjectGradeComparison',
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
      this.chart = echarts.init(document.getElementById('gradecomparison'))
      this.chart.setOption(
        {
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
              data: ['语文', '数学', '英语', '物理', '化学', '生物', '历史', '地理', '政治'],
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
              data: [102, 110, 92, 87, 93, 82, 67, 73, 63]
            },
            {
              name: '班平均分',
              type: 'line',
              data: [92, 86, 83, 64, 74, 80, 74, 80, 77]
            },
            {
              name: '校平均分',
              type: 'line',
              yAxisIndex: 1,
              data: [85, 80, 75, 60, 71, 75, 70, 72, 68]
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
