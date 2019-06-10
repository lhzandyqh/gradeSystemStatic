<template>
<!--  <h1>这是历次成绩组件</h1>-->
  <div class="container">
    <el-row>
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─学期内历次考试个人成绩─</span>
    </el-row>
    <el-row style="margin-top: 30px">
      <successive-grade-table style="margin-left: 20%"></successive-grade-table>
    </el-row>
    <el-row style="margin-top: 50px">
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─历次成绩等级分─</span>
    </el-row>
    <el-row style="margin-top: 20px">
      <successive-grade-score style="margin-left: 25%"></successive-grade-score>
    </el-row>
  </div>
</template>

<script>
import successiveGradeTable from '@/components/tables/successiveGradeTable'
import successiveGradeScore from '@/components/charts/successiveGradeScore'
export default {
  name: 'successivegrade',
  components: {successiveGradeTable, successiveGradeScore}
}
</script>

<style scoped>

</style>
