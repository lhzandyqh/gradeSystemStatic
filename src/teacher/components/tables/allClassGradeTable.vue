<template>
  <div class="tablecontainer">
    <span style="font-size: 12px;">向上的红色箭头“↑5”表示前进5名 向下的绿色箭头“↓5”表示后退5名 “0”表示排名无变化 “--”表示未获得上次考试信息</span>
    <el-table
      :data="allGradeTableData"
      align="center"
      border
      height="400"
      style="width: 100%;margin-top:10px;"
    >
      <el-table-column prop="id" label="序号" width="60"></el-table-column>
      <el-table-column prop="studentMachineCard" label="考号" width="70"></el-table-column>
      <el-table-column prop="studentName" label="姓名" width="65"></el-table-column>
      <el-table-column prop="classId" label="班级/行政班" width="100"></el-table-column>
      <el-table-column prop="coversionTotal" label="总分" width="60"></el-table-column>
      <el-table-column prop="classIndex" label="班名次" width="65"></el-table-column>
      <el-table-column prop="classIndex" label="校名次" width="65"></el-table-column>
      <el-table-column prop="advancefall" label="进步/后退" width="100"></el-table-column>
      <el-table-column prop="yuwenScore" label="语文" width="60"></el-table-column>
      <el-table-column prop="shuxueScore" label="数学" width="60"></el-table-column>
      <el-table-column prop="yingyuScore" label="英语" width="60"></el-table-column>
      <el-table-column prop="threeScore" label="三科总分" width="100"></el-table-column>
      <el-table-column prop="physics" label="物理" width="70"></el-table-column>
      <el-table-column prop="huaxueCoversion" label="化学" width="70"></el-table-column>
      <el-table-column prop="shengwuCoversion" label="生物" width="70"></el-table-column>
      <el-table-column prop="lishiCoversion" label="历史" width="70"></el-table-column>
      <el-table-column prop="diliCoversion" label="地理" width="70"></el-table-column>
      <el-table-column prop="zhengzhiCoversion" label="政治"></el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:20px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
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
      currentPage4: 4,
      tableData: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        }
      ]
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted () {
    console.log(11111, '555')
    let type = this.$route.query.type
    console.log(type, '88888')
  }
}
</script>

<style scoped>
</style>
