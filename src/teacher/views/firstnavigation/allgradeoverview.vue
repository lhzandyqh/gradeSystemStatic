<template>
  <div class="appcontainer">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─成绩概况─</span>
    </el-row>
    <el-row style="margin-top: 20px">
        <all-class-overview-table :subjectTableData="subjectTableData" style="margin-left: 25%"></all-class-overview-table>
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
import {getSubjectGradeTable} from '@/api/studentGetData'
export default {
  name: 'allgradeoverview',
  components: {allClassOverviewTable, subjectGradeComparison},
  mounted () {
    this.getSubjectData()
  },
  data () {
    return {
      radio: 1,
      subjectTableData: []
    }
  },
  methods: {
    getSubjectData: function () {
      const prams = {
        userID: 1
      }
      getSubjectGradeTable(prams).then(response => {
        this.subjectTableData = response.data.info
      })
    }
  }
}
</script>

<style scoped>
  .lalala{
    text-align: center;
  }

</style>
