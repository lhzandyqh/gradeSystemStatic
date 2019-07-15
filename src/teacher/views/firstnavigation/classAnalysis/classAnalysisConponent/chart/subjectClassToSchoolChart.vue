<template>
  <div class="app-container">
    <el-row>
      <div class="examName">
      <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
    </div>
      <div class="title">
        <span style="font-weight: bold;color: #19c237">─科目班校对比图─</span>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <div id="classtoschool" style="width:1200%;height: 400px"></div>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'subjectClassToSchoolChart',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('classtoschool'), 'macarons')
      this.chart.setOption(this.option)
    }
  },
  data () {
    return {
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
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
          data: ['班级平均分', '学校平均分']
        },
        xAxis: [
          {
            type: 'category',
            data: ['语文', '数学', '英语'],
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
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: '{value} ml'
            }
          }
        ],
        series: [
          {
            name: '班级平均分',
            type: 'bar',
            data: [75, 84, 80]
          },
          {
            name: '学校平均分',
            type: 'line',
            data: [69, 72, 75]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .title{
    margin-top: 20px;
  }

</style>
