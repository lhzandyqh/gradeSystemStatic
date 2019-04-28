<template>
  <div class="app-container">
<!--    <h1>这是试卷分析组件</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─试卷分析报告─</span>
    </el-row>
    <el-row style="margin-top: 20px">
      <div class="radiocontainer">
        <el-radio-group v-model="radio">
          <el-radio :label="1">语文</el-radio>
          <el-radio :label="2">数学</el-radio>
          <el-radio :label="3">英语</el-radio>
          <el-radio :label="4">物理</el-radio>
          <el-radio :label="5">化学</el-radio>
          <el-radio :label="6">政治</el-radio>
          <el-radio :label="7">历史</el-radio>
          <el-radio :label="8">地理</el-radio>
          <el-radio :label="9">政治</el-radio>
        </el-radio-group>
      </div>
    </el-row>
    <el-row>
      <h1>语文试卷分析报告</h1><br>
    </el-row>
    <el-row style="margin-top: 10px;margin-left: 25%">
      <exam-paper-analysis></exam-paper-analysis>
    </el-row>
  </div>
</template>

<script>
import examPaperAnalysis from '@/components/tables/examPaperAnalysis'
export default {
  name: 'paperanalysis',
  components: {examPaperAnalysis},
  data () {
    return {
      radio: 1
    }
  }
}
</script>

<style scoped>
  .app-container{
    width: 92%;
    padding-bottom:40px;
    background-color: #ffffff;
    margin-left: 4%;
    border-radius:10px
  }
</style>
