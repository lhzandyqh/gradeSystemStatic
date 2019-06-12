<template>
  <div id="pkcharts"  style="width:100%;height: 400px"></div>
</template>

<script>
import echarts from 'echarts'
import { getSubjectGradeTable } from '~/api/studentGetData'
export default {
  name: 'pkWithClassmates',
  props: {
    classmateScore: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      myScore: [],
      option: {
        title: {
          text: 'PK结果'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          data: ['我的分数', '对手分数']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['生物', '化学', '物理', '英语', '数学', '语文']
        },
        series: [
          {
            name: '我的分数',
            type: 'bar',
            data: [100, 100, 100, 100, 100, 100]
          },
          {
            name: '对手分数',
            type: 'bar',
            data: [this.classmateScore[5].shengwu, this.classmateScore[4].huaxue, this.classmateScore[3].wuli, this.classmateScore[2].yingyu, this.classmateScore[1].shuxue, this.classmateScore[0].yuwen]
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
      getSubjectGradeTable(prams).then(response => {
        // this.successiveDataSpace.push(response.data.info)
        // this.successiveData.push(this.successiveDataSpace[0])
        this.myScore = response.data.info
        this.option.series[0].data[0] = this.myScore[6].score
        this.option.series[0].data[1] = this.myScore[5].score
        this.option.series[0].data[2] = this.myScore[4].score
        this.option.series[0].data[3] = this.myScore[3].score
        this.option.series[0].data[4] = this.myScore[2].score
        this.option.series[0].data[5] = this.myScore[1].score
        // console.log('输出我的分数')
        // console.log(this.myScore)
        // console.log('输出我的生物分')
        // console.log(this.option.series[0].data[0])
        this.chart = echarts.init(document.getElementById('pkcharts'))
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
