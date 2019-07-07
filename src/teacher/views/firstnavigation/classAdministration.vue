<template>
  <div class="appcontainer">
    <el-row>
      <el-tabs v-model="activeName">
        <el-tab-pane label="成绩单" name="first">
          <tableTitle :titleList="name"></tableTitle>
          <el-row style="margin-top: 20px;">
            <all-class-grade-table :allGradeTableData="allGradeTableData" :tableHeader="tableInfo"></all-class-grade-table>\
            <Administration :chartData="dataList"></Administration>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="重点关注" name="second">
          <tableTitle :titleList="name2"></tableTitle>
          <focuson></focuson>
        </el-tab-pane>
        <el-tab-pane label="班校对比" name="third">
          <tableTitle :titleList="name3"></tableTitle>
          <administrationContrast></administrationContrast>
        </el-tab-pane>
        <el-tab-pane label="等级分布" name="fourth">
          <tableTitle :titleList="name4"></tableTitle>
          <pieChart :chartData="chartData"></pieChart>
          <grade></grade>
        </el-tab-pane>
        <el-tab-pane label="历次对比" name="fourth1">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
<<<<<<< HEAD
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import { getClassGradeTable,AdminClassClassScore } from '@/api/studentGetData'
import Administration from '@/components/charts/Administration'
=======
import allClassGradeTable from "@/components/tables/allClassGradeTable";
import focuson from "@/components/tables/focuson";
import administrationContrast from "@/components/tables/administrationContrast"; // 班校对比表格
import { getClassGradeTable } from "@/api/studentGetData";
import Administration from "@/components/charts/Administration";
import pieChart from "@/components/charts/pie-chart";
import grade from "@/components/tables/grade";
>>>>>>> master
export default {
  components: {
    tableTitle,
    allClassGradeTable,
    Administration,
    focuson,
    administrationContrast,
    pieChart,
    grade
  },
  data() {
    return {
      chartData: {},
      dataList: {},
      activeName: "first",
<<<<<<< HEAD
      name:'行政班各科分析表',
       allGradeTableData: [],
        tableInfo: [
        { prop: 'id', lable: '序号' },
        { prop: 'studentMachineCard', lable: '考号' },
        {prop: 'studentName', lable: '姓名'},
        { prop: 'classId', lable: '班级/行政班' },
        { prop: 'coversionTotal', lable: '总分' },
        { prop: 'classIndex', lable: '班名次' },
        { prop: 'schoolIndex', lable: '校名次' },
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
    };
  },
  methods:{
       getGradeTableData: function () {
         
      const prams = {
        classname: '1',
        gradename:'高二'
      }
      AdminClassClassScore(prams).then(response => {
        this.allGradeTableData = response.data.info
      })
=======
      name: "行政班各科分析表",
      name2: "重点关注",
      name3: "行政班成绩六率分析",
      name4: "学生各等级人数分布图",
      allGradeTableData: [],
      tableInfo: [
        { prop: "id", lable: "序号" },
        { prop: "studentMachineCard", lable: "考号" },
        { prop: "studentName", lable: "姓名" },
        { prop: "classId", lable: "班级/行政班" },
        { prop: "coversionTotal", lable: "总分" },
        { prop: "classIndex", lable: "班名次" },
        { prop: "classIndex", lable: "校名次" },
        { prop: "advancefall", lable: "进步/后退" },
        { prop: "yuwenScore", lable: "语文" },
        { prop: "shuxueScore", lable: "数学" },
        { prop: "yingyuScore", lable: "英语" },
        { prop: "threeScore", lable: "三科总分" },
        { prop: "physics", lable: "物理" },
        { prop: "huaxueCoversion", lable: "化学" },
        { prop: "shengwuCoversion", lable: "生物" },
        { prop: "lishiCoversion", lable: "历史" },
        { prop: "diliCoversion", lable: "地理" },
        { prop: "zhengzhiCoversion", lable: "政治" }
      ]
    };
  },
  methods: {
    getGradeTableData: function() {
      const prams = {
        userID: 1
      };
      getClassGradeTable(prams).then(response => {
        this.allGradeTableData = response.data.info;
      });
>>>>>>> master
    }
  },
  mounted() {
    this.getGradeTableData();
  }
};
</script>
<style>
</style>

