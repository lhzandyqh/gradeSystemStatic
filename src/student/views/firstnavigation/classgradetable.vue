<template>
  <div class="appcontainer">
    <el-row>
      <h4>{{this.examType}}</h4>
      <span style="font-weight: bold;color: #19c237">─班级成绩单─</span>
    </el-row>
    <el-row style="margin-top: 20px;">
      <all-class-grade-table :allGradeTableData="allGradeTableData"></all-class-grade-table>
    </el-row>
  </div>
</template>

<script>
import allClassGradeTable from '~/components/tables/allClassGradeTable'
import {getClassGradeTable} from '~/api/studentGetData'
export default {
  name: 'classgradetable',
  components: {allClassGradeTable},
  mounted () {
    this.getGradeTableData()
  },
  data () {
    return {
      radio: 1,
      allGradeTableData: [],
      examType: window.localStorage.getItem('examType')
    }
  },
  methods: {
    getGradeTableData: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getClassGradeTable(prams).then(response => {
        this.allGradeTableData = response.data.info
      })
    }
  }
}
</script>

<style scoped>

</style>
