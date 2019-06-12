<template>
<!--  <h1>这是历次成绩组件</h1>-->
  <div class="container">
    <el-row>
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─学期内历次考试个人成绩─</span>
    </el-row>
    <el-row style="margin-top: 30px">
      <successive-grade-table style="margin-left: 20%" :successiveData="successiveData"></successive-grade-table>
    </el-row>
    <el-row style="margin-top: 50px">
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─历次成绩原始分─</span>
    </el-row>
    <el-row style="margin-top: 20px">
      <successive-grade-score style="margin-left: 25%"></successive-grade-score>
    </el-row>
  </div>
</template>

<script>
import successiveGradeTable from '~/components/tables/successiveGradeTable'
import successiveGradeScore from '~/components/charts/successiveGradeScore'
import { getSuccessiveGradeTable } from '~/api/studentGetData'
export default {
  name: 'successivegrade',
  components: {successiveGradeTable, successiveGradeScore},
  mounted () {
    this.getSuccessiveData()
  },
  data () {
    return {
      successiveData: [],
      successiveDataSpace: []
    }
  },
  methods: {
    getSuccessiveData: function () {
      const prams = {
        userID: 1
      }
      getSuccessiveGradeTable(prams).then(response => {
        // this.successiveDataSpace.push(response.data.info)
        // this.successiveData.push(this.successiveDataSpace[0])
        this.successiveData = response.data.info
        console.log(this.successiveData)
      })
    }
  }
}
</script>

<style scoped>

</style>
