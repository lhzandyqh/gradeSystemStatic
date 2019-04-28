<template>
  <div class="appcontainer">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─成绩概况─</span>
    </el-row>
    <el-row style="margin-top: 20px">
      <div class="radiocontainer">
        <el-radio-group v-model="radio">
          <el-radio :label="1">全科</el-radio>
          <el-radio :label="2">语文</el-radio>
          <el-radio :label="3">数学</el-radio>
          <el-radio :label="4">英语</el-radio>
          <el-radio :label="5">物理</el-radio>
          <el-radio :label="6">化学</el-radio>
          <el-radio :label="7">政治</el-radio>
          <el-radio :label="8">历史</el-radio>
          <el-radio :label="9">地理</el-radio>
          <el-radio :label="9">政治</el-radio>
        </el-radio-group>
      </div>
    </el-row>
    <el-row style="margin-top: 20px">
        <all-class-overview-table style="margin-left: 25%"></all-class-overview-table>
    </el-row>
    <el-row style="margin-top: 30px">
      <span style="font-weight: bold;color: #19c237">─各科成绩比对图─</span>
    </el-row>
    <el-row style="margin-top: 30px">
      <subject-grade-comparison style="margin-left: 20%"></subject-grade-comparison>
    </el-row>
  </div>
</template>

<script>
import allClassOverviewTable from '@/components/tables/allClassOverviewTable'
import subjectGradeComparison from '@/components/charts/subjectGradeComparison'
export default {
  name: 'allgradeoverview',
  components: {allClassOverviewTable, subjectGradeComparison},
  data () {
    return {
      radio: 1
    }
  }
}
</script>

<style scoped>
  .lalala{
    text-align: center;
  }

</style>
