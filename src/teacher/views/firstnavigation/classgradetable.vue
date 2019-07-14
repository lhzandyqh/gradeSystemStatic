<template>
  <div class="appcontainer">
    <!-- 科目类别 + 查询 -->
    <el-row>
      <subjectTable></subjectTable>
    </el-row>

    <!-- 列表 -->
    <el-row style="margin-top: 20px;">
      <all-class-grade-table :allGradeTableData="allGradeTableData" :tableHeader="tableInfo"></all-class-grade-table>
    </el-row>
  </div>
</template>

<script>
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import subjectTable from '@/components/tables/subjectTable'
import { gradeExamTotal } from '@/api/studentGetData'
export default {
  name: 'classgradetable',
  components: { allClassGradeTable, subjectTable },
  mounted () {
    this.getGradeTableData()
  },
  data () {
    return {
      radio: 1,
      allGradeTableData: [],
      tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        {prop: 'studentName', lable: '姓名'},
        { prop: 'classId', lable: '班级/行政班' },
        { prop: 'coversionTotal', lable: '总分' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'classIndex', lable: '校名次' },
        { prop: 'advancefall', lable: '进步/后退' },
        { prop: 'yuwenScore', lable: '语文' },
        { prop: 'shuxueScore', lable: '数学' },
        { prop: 'yingyuScore', lable: '英语' },
        { prop: 'threeScore', lable: '三科总分' },
        { prop: 'physics', lable: '物理' },
        { prop: 'huaxueCoversion', lable: '化学' },
        { prop: 'shengwuCoversion', lable: '生物' },
        { prop: 'lishiCoversion', lable: '历史' },
        { prop: 'diliCoversion', lable: '地理' },
        { prop: 'zhengzhiCoversion', lable: '政治' }
      ]
    }
  },
  methods: {
    getGradeTableData: function () {
     
      gradeExamTotal().then(response => {
        console.log(response,99111)
        this.allGradeTableData = response.data.info
      })
    }
  }
}
</script>

<style scoped>
</style>
