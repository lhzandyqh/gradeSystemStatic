<template>
  <div class="container">
    <el-row>
      <el-table
        :data="selfDetails"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          prop="examType"
          label="考试名称"
          width="200">
        </el-table-column>
        <el-table-column
          align="center"
          prop="yuwenScore"
          label="语文"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="shuxueScore"
          label="数学"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="yingyuScore"
          label="英语"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="wuliScore"
          label="物理"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="huaxueScore"
          label="化学"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="shengwuScore"
          label="生物"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="zhengzhiScore"
          label="政治"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="diliScore"
          label="地理"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="lishiScore"
          label="历史"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="totalScore"
          label="总分"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="classIndex"
          label="班级排名"
          width="80">
        </el-table-column>
        <el-table-column
          align="center"
          prop="schoolIndex"
          label="校排名">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'gradeDetailsTable',
  props: {
    selfDetails: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
