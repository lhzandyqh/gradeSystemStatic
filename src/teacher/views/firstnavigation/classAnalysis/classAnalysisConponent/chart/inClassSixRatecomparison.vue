<template>
  <div class="app-container">
    <el-row>
      <el-row style="padding-top: 20px;padding-left: 30%">
        <div id="six" style="width:1000px;height: 400px"></div>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'inClassSixRate comparison',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('six'), 'macarons')
      this.chart.setOption(this.option)
    }
  },
  data () {
    return {
      option: {
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ['product', '第一次月考', '第二次月考', '第三次月考', '第四次月考'],
          source: [
            {product: '高分率', '第一次月考': 43.3, '第二次月考': 85.8, '第三次月考': 93.7, '第四次月考': 78.4},
            {product: '优秀率', '第一次月考': 83.1, '第二次月考': 73.4, '第三次月考': 55.1, '第四次月考': 56},
            {product: '良好率', '第一次月考': 43.3, '第二次月考': 85.8, '第三次月考': 93.7, '第四次月考': 78.4},
            {product: '及格率', '第一次月考': 83.1, '第二次月考': 73.4, '第三次月考': 55.1, '第四次月考': 56},
            {product: '低分率', '第一次月考': 43.3, '第二次月考': 85.8, '第三次月考': 93.7, '第四次月考': 78.4},
            {product: '超均率', '第一次月考': 83.1, '第二次月考': 73.4, '第三次月考': 55.1, '第四次月考': 56}
          ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'},
          {type: 'bar'}
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
