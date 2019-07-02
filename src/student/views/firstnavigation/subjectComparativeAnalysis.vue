<template>
  <div class="app-container">
    <el-row style="padding-top: 20px">
      <single-subject-analysis></single-subject-analysis>
    </el-row>
    <el-row style="padding-top: 20px">
      <span style="font-size: 15px;font-weight: bolder">单科时序对比分析图展示单科近三次考试的成绩及各单科趋势走向</span>
    </el-row>
  </div>
</template>

<script>
import singleSubjectAnalysis from '~/components/charts/singleSubjectAnalysis'
export default {
  name: 'subjectComparativeAnalysis',
  components: { singleSubjectAnalysis }
}
</script>

<style scoped>

</style>
