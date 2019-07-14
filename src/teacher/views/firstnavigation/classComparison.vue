<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="班级六率对比" name="first">
        <el-row>
          <tableTitle :titleList="name"></tableTitle>
         
      <all-class-grade-table :allGradeTableData="list" :tableHeader="tableInfo"></all-class-grade-table>
   
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="全校前N名上线分布对比" name="second">配置管理</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
import allClassGradeTable from '@/components/tables/allClassGradeTable'

export default {
  components: {
    tableTitle,
    allClassGradeTable
  },
  data() {
    return {
      name:'班级六率对比表',
      list:[],
      tableInfo: [
        { prop: 'id', lable: '年级' },
        { prop: 'studentMachineCard', lable: '班级/行政班' },
        {prop: 'studentName', lable: '高分人数'},
        { prop: 'classId', lable: '高分率' },
        { prop: 'coversionTotal', lable: '高分率排名' },
        { prop: 'classIndex', lable: '优秀人数' },
        { prop: 'classIndex', lable: '优秀率' },
        { prop: 'advancefall', lable: '优秀率排名' },
        { prop: 'yuwenScore', lable: '良好人数' },
        { prop: 'shuxueScore', lable: '良好率' },
        { prop: 'yingyuScore', lable: '良好率排名' },
        { prop: 'threeScore', lable: '及格人数' },
        { prop: 'physics', lable: '及格率' },
        { prop: 'huaxueCoversion', lable: '及格率排名' },
        { prop: 'shengwuCoversion', lable: '低分人数' },
        { prop: 'lishiCoversion', lable: '低分率' },
        { prop: 'diliCoversion', lable: '低分率排名' },
        { prop: 'zhengzhiCoversion', lable: '超均人数' },
         { prop: 'diliCoversion', lable: '超均率' },
        { prop: 'zhengzhiCoversion', lable: '超均率排名' }
      ]
    };
  }
};
</script>
<style>
</style>
