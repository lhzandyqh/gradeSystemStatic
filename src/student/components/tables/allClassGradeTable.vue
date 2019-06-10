<template>
  <div class="tablecontainer">
    <span style="font-size: 12px">向上的红色箭头“↑5”表示前进5名    向下的绿色箭头“↓5”表示后退5名    “0”表示排名无变化    “--”表示未获得上次考试信息</span>
    <el-table
      :data="tableData"
      :align="center"
      border
      style="width: 100%">
      <el-table-column
        prop="serialnumber"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="examnumber"
        label="考号"
        width="70">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="65">
      </el-table-column>
      <el-table-column
        prop="classgrade"
        label="班级/行政班"
        width="100">
      </el-table-column>
      <el-table-column
        prop="totalpoint"
        label="总分"
        width="60">
      </el-table-column>
      <el-table-column
        prop="classrank"
        label="班名次"
        width="65">
      </el-table-column>
      <el-table-column
        prop="advancefall"
        label="进步/后退"
        width="100">
      </el-table-column>
      <el-table-column
        prop="chinese"
        label="语文"
        width="60">
      </el-table-column>
      <el-table-column
        prop="math"
        label="数学"
        width="60">
      </el-table-column>
      <el-table-column
        prop="english"
        label="英语"
        width="60">
      </el-table-column>
      <el-table-column
        prop="threesum"
        label="三科总分"
        width="100">
      </el-table-column>
      <el-table-column
        prop="physics"
        label="物理"
        width="70">
      </el-table-column>
      <el-table-column
        prop="chemistry"
        label="化学"
        width="70">
      </el-table-column>
      <el-table-column
        prop="biology"
        label="生物"
        width="70">
      </el-table-column>
      <el-table-column
        prop="historyclass"
        label="历史"
        width="70">
      </el-table-column>
      <el-table-column
        prop="geography"
        label="地理"
        width="70">
      </el-table-column>
      <el-table-column
        prop="politics"
        label="政治">
      </el-table-column>
    </el-table>
  </div>

</template>

<script>
export default {
  name: 'allClassGradeTable',
  data () {
    return {
      tableData: [{
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      }, {
        serialnumber: '1',
        examnumber: '50102',
        name: '柯露雅',
        classgrade: '1',
        totalpoint: '210',
        classrank: '16',
        advancefall: '5',
        chinese: '87',
        math: '62',
        english: '71',
        threesum: '210',
        physics: '57',
        chemistry: '65',
        biology: '87',
        historyclass: '97',
        geography: '67',
        politics: '80'
      } ]
    }
  }
}
</script>

<style scoped>

</style>
