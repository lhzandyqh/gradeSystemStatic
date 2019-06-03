<template>
  <el-table
    :data="tableData"
    height="400"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      align="center"
      label="学科"
      width="80">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="原分数"
      width="80">
    </el-table-column>
    <el-table-column
      prop="date"
      align="center"
      width="80">
      <img v-bind:src="imgUrl" width="50%">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="理想分数"
      width="100">
      <template slot-scope="scope">
        <el-input></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="原班级排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="新班级排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="原学校排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      align="center"
      label="新学校排名"
      width="120">
    </el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查询</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\jiantou.png'
export default {
  name: 'beyondSelfTable',
  data () {
    return {
      imgUrl: imgUrl,
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
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    }
  }
}
</script>

<style scoped>

</style>
