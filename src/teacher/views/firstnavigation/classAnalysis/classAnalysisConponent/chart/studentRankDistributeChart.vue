<template>
  <div class="app-container">
    <el-row>
      <div class="examName">
        <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
      </div>
      <div class="title">
        <span style="font-weight: bold;color: #19c237">─学生等级分布图─</span>
      </div>
    </el-row>
    <el-row>
      <el-col :span="16">
        <div>
          <div id="studentrank" style="width:700px;height: 500px"></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="cardContainer">
          <el-card class="box-card">
            <div class="cardContent">
              <span style="font-size:12px;color: #19c237">高分【90%~100%】学生名单（10人)</span><br>
              <span  style="font-size:12px">分数区间【765分-850分】</span>
              <div class="name">
                <div v-for="o in name" :key="o" class="text item">
                  {{o }}
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'studentRankDistributeChart',
  mounted () {
    this.initChart()
  },
  methods: {
    initChart: function () {
      this.chart = echarts.init(document.getElementById('studentrank'), 'macarons')
      this.chart.setOption(this.option)
      /*      window.addEventListener('resize', () => { this.chart.resize() }) */
    }
  },
  data () {
    return {
      name: ['孙金鑫', '邓庆东'],
      option: {
        title: {
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['高分【90%~100%】', '优秀【85%~90%】', '良好【75%~85%】', '及格【60%~75%】', '低分【0%~60%】']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 335, name: '高分【90%~100%】'},
              {value: 310, name: '优秀【85%~90%】'},
              {value: 234, name: '良好【75%~85%】'},
              {value: 135, name: '及格【60%~75%】'},
              {value: 1548, name: '低分【0%~60%】'}
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .box-card {
    width: 250px;
    height: 250px;
  }
  .cardContainer{
    margin-top: 80px;
    margin-left: 40px;
  }
  .name{
    margin-top: 30px;
    font-weight: bolder;
  }

</style>
