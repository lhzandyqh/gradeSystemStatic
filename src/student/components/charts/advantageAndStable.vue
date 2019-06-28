<template>
  <div id="advantage"  style="width:100%;height: 400px"></div>
</template>

<script>
import { getAdvantageAndStableData } from '~/api/studentGetData'
import echarts from 'echarts'
export default {
  name: 'advantageAndStable',
  data () {
    return {
      getData: [],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: []
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
          data: []
        },
        series: [
          {
            name: '',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#fa8072'
            },
            barWidth: 60,
            data: []
          },
          {
            name: '',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#645ac8'
            },
            barWidth: 60,
            data: []
          },
          {
            name: '',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#64c382'
            },
            barWidth: 60,
            data: []
          },
          {
            name: '',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight'
              }
            },
            itemStyle: {
              color: '#ff9ec8'
            },
            barWidth: 60,
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
    initChart: function () {
      const prams = {
        user_id: window.localStorage.getItem('id')
      }
      getAdvantageAndStableData(prams).then(response => {
        this.getData = response.data.info
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
        this.option.legend.data.push(this.getData[1][3].examtype)
        this.option.series[3].name = this.getData[1][3].examtype
        while (i < this.getData.length) {
          this.option.xAxis.data.push(this.getData[i].subject)
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
          this.option.series[3].data.push(this.getData[k][3].score)
          console.log('检测值')
          console.log(this.getData[k][2].score)
          console.log(k)
          i = i + 2
          k = k + 2
        }
        this.chart = echarts.init(document.getElementById('advantage'))
        this.chart.setOption(this.option)
      })
    }
  }
}
</script>

<style scoped>

</style>
