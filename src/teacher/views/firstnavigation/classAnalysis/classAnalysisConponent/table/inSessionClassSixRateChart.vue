<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        align="center"
        label="日期"
        width="100">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="考试名称"
        width="160">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="学科"
        width="80">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="年级人数"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        align="center"
        label="高分人数"
        width="60">
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
        width="60">
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
        width="60">
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
        width="60">
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
        width="60">
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
        width="60">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="超均率">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'inSessionClassSixRateChart',
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
