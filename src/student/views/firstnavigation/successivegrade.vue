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
    <el-row style="padding-top: 40px">
      <span style="font-weight: bold;color: #19c237;font-size: 20px">─学期内历次单科成绩─</span>
    </el-row>
    <el-row style="padding-top: 20px">
      <preivious-subject-grade-table :singleData="singleData" style="margin-left: 5%"></preivious-subject-grade-table>
    </el-row>
  </div>
</template>

<script>
import successiveGradeTable from '~/components/tables/successiveGradeTable'
import preiviousSubjectGradeTable from '~/components/tables/preiviousSubjectGradeTable'
import successiveGradeScore from '~/components/charts/successiveGradeScore'
import { getSuccessiveGradeTable, getSingleSubjectSuccessivegrade } from '~/api/studentGetData'
export default {
  name: 'successivegrade',
  components: {successiveGradeTable, successiveGradeScore, preiviousSubjectGradeTable},
  mounted () {
    this.getSuccessiveData()
    this.getSingleData()
  },
  data () {
    return {
      successiveData: [],
      successiveDataSpace: [],
      singleData: []
    }
  },
  methods: {
    getSuccessiveData: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getSuccessiveGradeTable(prams).then(response => {
        // this.successiveDataSpace.push(response.data.info)
        // this.successiveData.push(this.successiveDataSpace[0])
        this.successiveData = response.data.info
        console.log(this.successiveData)
      })
    },
    getSingleData: function () {
      const prams = {
        user_id: window.localStorage.getItem('id')
      }
      getSingleSubjectSuccessivegrade(prams).then(response => {
        this.singleData = response.data.info
      })
    }
  }
}
</script>

<style scoped>

</style>
