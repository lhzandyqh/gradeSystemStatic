<template>
  <div class="container">
    <el-row>
      <span style="font-size: 13px;font-weight: bold;float: left">导出学期内历次考试个人成绩</span>
    </el-row>
    <el-row>
      <el-table
        :data="successiveData"
        border
        style="width: 82%">
        <el-table-column
          prop="time"
          label="时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="examName"
          label="名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="fullscore"
          label="满分值"
          width="80">
        </el-table-column>
        <el-table-column
          prop="coversionTotal"
          label="我的得分"
          width="80">
        </el-table-column>
        <el-table-column
          prop="ratedscore"
          label="等级分"
          width="80">
        </el-table-column>
        <el-table-column
          prop="classIndex"
          label="班级排名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="schoolIndex"
          label="本校排名">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'successiveGradeTable',
  props: {
    successiveData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // tableData: this.successiveData[0]
    }
  }
}
</script>

<style scoped>

</style>
