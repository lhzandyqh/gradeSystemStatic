<template>
  <div class="app-container">
    <el-row>
      <div class="title">
        <div> <span style="font-weight: bold;color: #19c237">─全校前N名分布─</span></div>
        <div style="padding-top: 20px"><span style="font-size: 15px;font-weight: bolder;">班级： 共70 人   全校： 共500人</span></div>
      </div>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div id="frontrank" style="width:500px;height: 400px"></div>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="font-weight: bolder">前十名学生名单</span>
          </div>
          <div>
            <span style="font-size: 14px">孙金鑫</span><br>
            <span style="font-size: 14px">邓庆东</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <div class="table">
        <el-table
          :data="tableData"
          border
          style="width: 60%">
          <el-table-column
            prop="class"
            align="center"
            label="班级/行政班"
            width="150">
          </el-table-column>
          <el-table-column
            prop="frontone"
            align="center"
            label="校前100名人数"
            width="160">
          </el-table-column>
          <el-table-column
            prop="fronttwo"
            align="center"
            label="校100-200名人数"
            width="160">
          </el-table-column>
          <el-table-column
            prop="frontthree"
            align="center"
            label="校200-300名人数">
          </el-table-column>
        </el-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'frontManyRankChart',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('frontrank'), 'macarons')
      this.chart.setOption(this.option)
    }
  },
  data () {
    return {
      tableData: [{
        class: '一班',
        frontone: '15',
        fronttwo: '15',
        frontthree: '23'
      }],
      option: {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
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
            data: ['前100名', '前200名', '前300名'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '人数',
            type: 'bar',
            barWidth: '40%',
            data: [15, 30, 53]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .box-card{
    width: 80%;
    margin-top: 60px;
    margin-left: 40px;
  }
  .table{
    margin-left: 20%;
    margin-top: 20px;
  }

</style>
