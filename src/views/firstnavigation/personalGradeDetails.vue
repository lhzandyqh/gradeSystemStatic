<template>
  <div class="container">
    <el-row style="padding-top: 30px">
      <span style="font-weight: bold;color: #19c237">个人历次考试详情</span>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="tableContainer">
        <grade-details-table :selfDetails="selfDetails" style="margin-left: 15%"></grade-details-table>
      </div>
    </el-row>
  </div>
</template>

<script>
import gradeDetailsTable from '@/components/tables/gradeDetailsTable'
import {getSelfGradeDetails} from '@/api/studentGetData'
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
        user_id: 1
      }
      getSelfGradeDetails(prams).then(response => {
        this.selfDetails = response.data.info
      })
    }
  }
}
</script>

<style scoped>
  .tableContainer{
    text-align: center;
  }

</style>
