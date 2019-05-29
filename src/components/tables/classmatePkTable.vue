<template>
  <div class="container">
    <el-row>
      <el-table
        :data="tableData"
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
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="theclass"
          label="班级"
          width="60">
        </el-table-column>
        <el-table-column
          prop="sumgrade"
          label="总成绩"
          width="90">
        </el-table-column>
        <el-table-column
          prop="classrank"
          label="班级占位"
          width="100">
        </el-table-column>
        <el-table-column
          prop="schoolrank"
          label="校占位"
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
          prop="physical"
          label="物理"
          width="60">
        </el-table-column>
        <el-table-column
          prop="chemical"
          label="化学"
          width="60">
        </el-table-column>
        <el-table-column
          prop="biological"
          label="生物"
          width="60">
        </el-table-column>
        <el-table-column
          prop="history"
          label="历史"
          width="60">
        </el-table-column>
        <el-table-column
          prop="geographic"
          label="地理"
          width="60">
        </el-table-column>
        <el-table-column
          prop="political"
          label="政治">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'classmatePkTable',
  data () {
    return {
      tableData: [{
        serialnumber: '1',
        examnumber: '201301',
        name: '孙金鑫',
        theclass: '1',
        sumgrade: '685',
        classrank: '1',
        schoolrank: '3',
        chinese: '110',
        math: '130',
        english: '132',
        physical: '98',
        chemical: '87',
        biological: '90',
        history: '45',
        geographic: '67',
        political: '67'
      }, {
        serialnumber: '1',
        examnumber: '201301',
        name: '邓庆东',
        theclass: '1',
        sumgrade: '685',
        classrank: '1',
        schoolrank: '3',
        chinese: '110',
        math: '130',
        english: '132',
        physical: '98',
        chemical: '87',
        biological: '90',
        history: '45',
        geographic: '67',
        political: '67'
      }, {
        serialnumber: '1',
        examnumber: '201301',
        name: '安梦良',
        theclass: '1',
        sumgrade: '685',
        classrank: '1',
        schoolrank: '3',
        chinese: '110',
        math: '130',
        english: '132',
        physical: '98',
        chemical: '87',
        biological: '90',
        history: '45',
        geographic: '67',
        political: '67'
      }, {
        serialnumber: '1',
        examnumber: '201301',
        name: '陈志恒',
        theclass: '1',
        sumgrade: '685',
        classrank: '1',
        schoolrank: '3',
        chinese: '110',
        math: '130',
        english: '132',
        physical: '98',
        chemical: '87',
        biological: '90',
        history: '45',
        geographic: '67',
        political: '67'
      }]
    }
  }
}
</script>

<style scoped>

</style>
