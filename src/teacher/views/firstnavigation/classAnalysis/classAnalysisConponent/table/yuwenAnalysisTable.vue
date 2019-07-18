<template>
  <div class="appContainer">
    <div class="tableContent">
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%">
          <el-table-column
            prop="date"
            align="center"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="考号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="姓名"
            width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="班级/行政班"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="总分"
            width="60">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="班名次"
            width="70">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="校名次"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="进步/后退"
            width="85">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="语文"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="数学"
            width="70">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="英语"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="三科总分"
            width="100">
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="物理"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="化学"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="生物"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="历史"
            width="70">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="地理"
            width="70">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="政治">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'yuwenAnalysisTable',
  methods: {
  },
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
  }

</style>
