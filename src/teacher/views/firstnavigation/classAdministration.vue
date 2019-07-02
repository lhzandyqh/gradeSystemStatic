<template>
  <div class="appcontainer">
    <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="成绩单" name="first">
           <tableTitle :titleList="name"></tableTitle>
            <el-row style="margin-top: 20px;">
      <all-class-grade-table :allGradeTableData="allGradeTableData" :tableHeader="tableInfo"></all-class-grade-table>\
      <Administration></Administration>
    </el-row>
        </el-tab-pane>
        <el-tab-pane label="重点关注" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="班校对比" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="等级分布" name="fourth">定时任务补偿</el-tab-pane>
        <el-tab-pane label="历次对比" name="fourth1">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import tableTitle from '@/components/tables/tableTitle'
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import { getClassGradeTable } from '@/api/studentGetData'
import Administration from '@/components/charts/Administration'
export default {
  components: {
    tableTitle,
    allClassGradeTable,
    Administration
  },
  data () {
    return {
      activeName: 'first',
      name: '行政班各科分析表',
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
