<template>
  <div class="appcontainer">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─班级成绩单─</span>
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
    <el-row style="margin-top: 20px;">
      <all-class-grade-table></all-class-grade-table>
    </el-row>
  </div>
</template>

<script>
import allClassGradeTable from '@/components/tables/allClassGradeTable'
export default {
  name: 'classgradetable',
  components: {allClassGradeTable},
  data () {
    return {
      radio: 1
    }
  }
}
</script>

<style scoped>

</style>
