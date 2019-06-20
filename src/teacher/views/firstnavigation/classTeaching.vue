<template>
  <div class="appcontainer">
    <!-- 科目 -->
    <el-row>
      <subjectTable></subjectTable>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <allClassGradeTable :allGradeTableData="allGradeTableData" :tableHeader="tableInfo"></allClassGradeTable>
    </el-row>
  </div>
</template>
<script>
import subjectTable from '@/components/tables/subjectTable'
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import { getClassGradeTable } from '@/api/studentGetData'
export default {
  components: {
    allClassGradeTable,
    subjectTable
  },
  data () {
    return {
      allGradeTableData: [],
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        { prop: 'studentName', lable: '姓名' },
        { prop: 'classId', lable: '班级/教学班' },
        { prop: 'physics', lable: '物理成绩' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'classIndex', lable: '校名次' },
        { prop: 'advancefall', lable: '进步/后退' }
      ]
    }
  },
  methods: {
    // 列表数据
    getGradeTableData: function () {
      const prams = {
        userID: 1
      }
      getClassGradeTable(prams).then(response => {
        this.allGradeTableData = response.data.info
      })
    }
  },
  mounted () {
    this.getGradeTableData()
  }
}
</script>
<style>
</style>
