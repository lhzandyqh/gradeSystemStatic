<template>
  <div class="app-container">
    <div class="tableContent">
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            align="center"
            label="学科"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="类别"
            width="60">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="平均分"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="等级分"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="高分人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="高分率"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="优秀人数"
            width="85">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="优秀率"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="良好人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="良好率"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="及格人数"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="及格率"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="低分人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="低分率"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="超均人数"
            width="80">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="超均率">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classSixRateAnalysisTable',
  data () {
    return {
      tableData: []
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
    margin:0px auto;
    padding-top: 20px;
  }

</style>
