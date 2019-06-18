<template>
  <div class="tablecontainer">
    <span style="font-size: 12px">向上的红色箭头“↑5”表示前进5名    向下的绿色箭头“↓5”表示后退5名    “0”表示排名无变化    “--”表示未获得上次考试信息</span>
    <el-table
      :data="allGradeTableData"
      align="center"
      border
      height="400"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="studentMachineCard"
        label="考号"
        width="70">
      </el-table-column>
      <el-table-column
        prop="studentName"
        label="姓名"
        width="65">
      </el-table-column>
      <el-table-column
        prop="classId"
        label="班级/行政班"
        width="100">
      </el-table-column>
      <el-table-column
        prop="coversionTotal"
        label="总分"
        width="60">
      </el-table-column>
      <el-table-column
        prop="classIndex"
        label="班名次"
        width="65">
      </el-table-column>
      <el-table-column
        prop="advancefall"
        label="进步/后退"
        width="100">
      </el-table-column>
      <el-table-column
        prop="yuwenScore"
        label="语文"
        width="60">
      </el-table-column>
      <el-table-column
        prop="shuxueScore"
        label="数学"
        width="60">
      </el-table-column>
      <el-table-column
        prop="yingyuScore"
        label="英语"
        width="60">
      </el-table-column>
      <el-table-column
        prop="threeScore"
        label="三科总分"
        width="100">
      </el-table-column>
      <el-table-column
        prop="physics"
        label="物理"
        width="70">
      </el-table-column>
      <el-table-column
        prop="huaxueCoversion"
        label="化学"
        width="70">
      </el-table-column>
      <el-table-column
        prop="shengwuCoversion"
        label="生物"
        width="70">
      </el-table-column>
      <el-table-column
        prop="lishiCoversion"
        label="历史"
        width="70">
      </el-table-column>
      <el-table-column
        prop="diliCoversion"
        label="地理"
        width="70">
      </el-table-column>
      <el-table-column
        prop="zhengzhiCoversion"
        label="政治">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: 'allClassGradeTable',
  props: {
    allGradeTableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tableData: []
    }
  }
}
</script>

<style scoped>

</style>
