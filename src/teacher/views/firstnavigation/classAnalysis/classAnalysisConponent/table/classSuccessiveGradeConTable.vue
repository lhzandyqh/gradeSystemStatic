<template>
  <div class="app-container">
    <div class="tableContent">
      <el-table
        :data="tableData"
        border
        style="width: 70%">
        <el-table-column
          prop="date"
          align="center"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="examName"
          label="考试名称"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="averageScore"
          label="总成绩平均分"
          align="center"
          width="180">
        </el-table-column>
        <el-table-column
          prop="standradScore"
          align="center"
          label="总成绩标准分">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classSuccessiveGradeConTable',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        examName: '高三第一次月考',
        averageScore: '24',
        standradScore: '10'
      }, {
        date: '2016-06-02',
        examName: '高三第二次月考',
        averageScore: '30',
        standradScore: '15'
      }, {
        date: '2016-07-02',
        examName: '高三第三次月考',
        averageScore: '26',
        standradScore: '16'
      }, {
        date: '2016-08-02',
        examName: '高三第四次月考',
        averageScore: '27',
        standradScore: '18'
      }]
    }
  }
}
</script>

<style scoped>
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .tableContent{
    /*margin:0px auto;*/
    padding-top: 20px;
    margin-left: 25%;
  }
</style>
