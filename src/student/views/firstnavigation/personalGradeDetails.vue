<template>
  <div class="container">
    <div class="allPrint">
      <section ref="print">
        <el-row style="padding-top: 20px">
          <span style="font-weight: bold;color: #19c237">─本次考试成绩单─</span>
        </el-row>
        <el-row style="padding-top: 40px">
          <div class="tableContainer">
            <section ref="andPrint">
              <grade-details-table :selfDetails="selfDetails" style="margin-left: 0%"></grade-details-table>
            </section>
          </div>
        </el-row>
        <el-row style="padding-top: 40px">
          <span style="font-weight: bold;color: #19c237">─本次考试排名变化情况─</span>
        </el-row>
        <el-row style="padding-top: 40px">
          <div class="tableContainer">
            <section ref="andPrint">
              <rank-change-table :rankChangeData="rankChangeData" style="margin-left: 0%"></rank-change-table>
            </section>
          </div>
        </el-row>
      </section>
    </div>
    <el-row style="padding-top: 20px">
      <el-button type="success" @click="printTable" plain>打印成绩单</el-button>
    </el-row>
  </div>
</template>

<script>
import gradeDetailsTable from '~/components/tables/gradeDetailsTable'
import rankChangeTable from '~/components/tables/rankChangeTable'
import {getMyNewGradeTable, getRankChangeData} from '~/api/studentGetData'
export default {
  name: 'personalGradeDetails',
  components: {gradeDetailsTable, rankChangeTable},
  mounted () {
    this.getSelfGradeDetails()
  },
  data () {
    return {
      selfDetails: [],
      rankChangeData: []
    }
  },
  methods: {
    getSelfGradeDetails: function () {
      const prams = {
        user_id: window.localStorage.getItem('id')
      }
      getMyNewGradeTable(prams).then(response => {
        this.selfDetails = response.data.info
        console.log('测试')
        console.log(this.selfDetails)
      })
      getRankChangeData(prams).then(response => {
        this.rankChangeData.push(response.data.info)
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
