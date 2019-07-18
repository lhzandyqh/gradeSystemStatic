<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 90%">
      <el-table-column
        prop="date"
        label="序号"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        label="考号"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="姓名"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="科目"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="班级"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="成绩"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="date"
        label="班名次"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校名次"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="进步/后退">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'singleSubjectGradeTable',
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
