<template>
  <div id="weakspot"  style="width:100%;height: 100%"></div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'weakSpot',
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
      this.chart = echarts.init(document.getElementById('weakspot'))
      this.chart.setOption({
        tooltip: {},
        legend: {
          data: ['总分超越率', '单科超越率']
        },
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '语文', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '数学', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '英语', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '物理', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '化学', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '生物', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '历史', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '地理', max: 100},
            // eslint-disable-next-line standard/object-curly-even-spacing
            { name: '政治', max: 100}
          ]
        },
        series: [{
          name: '预算 vs 开销（Budget vs spending）',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [90, 90, 90, 90, 90, 90, 90, 90, 90],
              name: '总分超越率'
            },
            {
              value: [87, 99, 97, 99, 93, 87, 73, 74, 72],
              name: '单科超越率'
            }
          ]
        }]
      }
      )
    }
  }
}
</script>

<style scoped>

</style>
