<template>
  <div class="container">
    <el-row>
      <span style="font-size: 13px;font-weight: bold;float: left">导出学期内历次考试个人成绩</span>
    </el-row>
    <el-row>
      <el-table
        :data="tableData"
        border
        style="width: 73%">
        <el-table-column
          prop="time"
          label="时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="fullscore"
          label="满分值"
          width="80">
        </el-table-column>
        <el-table-column
          prop="myscroe"
          label="我的得分"
          width="80">
        </el-table-column>
        <el-table-column
          prop="ratedscore"
          label="等级分"
          width="80">
        </el-table-column>
        <el-table-column
          prop="classrank"
          label="班级排名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="schoolrank"
          label="本校排名">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'successiveGradeTable',
  data () {
    return {
      tableData: [{
        time: '2019-01-15',
        name: '2019级高一第一学期第一次月考',
        fullscore: '700',
        myscroe: '620',
        ratedscore: '75',
        classrank: '5',
        schoolrank: '70'
      }, {
        time: '2019-01-15',
        name: '2019级高一第一学期第二次月考',
        fullscore: '700',
        myscroe: '600',
        ratedscore: '82',
        classrank: '4',
        schoolrank: '64'
      }, {
        time: '2019-01-15',
        name: '2019级高一第一学期期中考试',
        fullscore: '700',
        myscroe: '630',
        ratedscore: '85',
        classrank: '3',
        schoolrank: '25'
      }, {
        time: '2019-01-15',
        name: '2019级高一第一学期期末考试',
        fullscore: '700',
        myscroe: '650',
        ratedscore: '90',
        classrank: '1',
        schoolrank: '15'
      }]
    }
  }
}
</script>

<style scoped>

</style>
