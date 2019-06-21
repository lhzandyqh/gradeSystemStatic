<template>
  <div class="container">
    <el-row style="padding-top: 30px">
      <span style="font-weight: bold;color: #19c237">个人本次考试详情</span>
    </el-row>
    <el-row style="padding-top: 80px">
      <div class="tableContainer">
        <section ref="print">
          <grade-details-table :selfDetails="selfDetails" style="margin-left: 0%"></grade-details-table>
        </section>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <el-button type="success" @click="printTable" plain>打印成绩单</el-button>
    </el-row>
  </div>
</template>

<script>
import gradeDetailsTable from '~/components/tables/gradeDetailsTable'
import {getUserGrade} from '~/api/studentGetData'
export default {
  name: 'personalGradeDetails',
  components: {gradeDetailsTable},
  mounted () {
    this.getSelfGradeDetails()
  },
  data () {
    return {
      selfDetails: []
    }
  },
  methods: {
    getSelfGradeDetails: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getUserGrade(prams).then(response => {
        this.selfDetails.push(response.data.info)
        console.log(this.selfDetails)
      })
    },
    printTable: function () {
      console.log('我要开始打印了')
      this.$print(this.$refs.print)
    }
  }
}
</script>

<style scoped>
  .tableContainer{
    text-align: center;
  }

</style>
