<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="班级六率对比" name="first">
        <el-row>
          <tableTitle :titleList="name"></tableTitle>

          <all-class-grade-table :allGradeTableData="list" :tableHeader="tableInfo"></all-class-grade-table>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="全校前N名上线分布对比" name="second">
        <all-class-grade-table :allGradeTableData="schoolList" :tableHeader="schoolInfo"></all-class-grade-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
import allClassGradeTable from "@/components/tables/allClassGradeTable";
import {
  AdminClassTotalContrast,
  AdminClassTotalRankClass
} from "@/api/studentGetData";
export default {
  components: {
    tableTitle,
    allClassGradeTable
  },
  data() {
    return {
      name: "班级六率对比表",
      activeName: "first",
      list: [], //班级六率对比
      schoolList: [], //全校前N名上线分布表
      tableInfo: [
        { prop: "gradename", lable: "年级" },
        { prop: "gradename", lable: "班级/行政班" },
        { prop: "highnum", lable: "高分人数" },
        { prop: "高分率", lable: "高分率" },
        { prop: "coversionTotal", lable: "高分率排名" },
        { prop: "excellentstudents", lable: "优秀人数" },
        { prop: "优秀率", lable: "优秀率" },
        { prop: "优秀率", lable: "优秀率排名" },
        { prop: "mediumnum", lable: "良好人数" },
        { prop: "良好率", lable: "良好率" },
        { prop: "yingyuScore", lable: "良好率排名" },
        { prop: "goodnumbers", lable: "及格人数" },
        { prop: "及格率", lable: "及格率" },
        { prop: "huaxueCoversion", lable: "及格率排名" },
        { prop: "failnum", lable: "低分人数" },
        { prop: "低分率", lable: "低分率" },
        { prop: "diliCoversion", lable: "低分率排名" },
        { prop: "beyondnum", lable: "超均人数" },
        { prop: "超均率", lable: "超均率" },
        { prop: "zhengzhiCoversion", lable: "超均率排名" }
      ],
      schoolInfo: [
        { prop: "gradename", lable: "年级" },
        { prop: "classid", lable: "班级/行政班" },
        { prop: "oneHunderdnum", lable: "校前100名人数" },
        { prop: "oneHundredRadio", lable: "前100名人排名" },
        { prop: "twoHundrednum", lable: "校前200人数" },
        { prop: "twoHundredRadio", lable: "前200名排名" },
        { prop: "threeHundernum", lable: "校前300名人数" },
        { prop: "twoHundredRadio", lable: "前300名排名" }
      ]
    };
  },
  created() {
    this.getSixList();
    this.getSchoolList();
  },
  mounted() {},
  methods: {
    getSixList() {
      // 班级六率对比
      AdminClassTotalContrast().then(res => {
        if (res.data.errno === 200) {
          this.list = res.data.info;
        }
       
      });
    },
    getSchoolList() {
      AdminClassTotalRankClass().then(res => {
        if(res.data.errno ===200){
          this.schoolList = res.data.info
        }
       
      });
    }
  }
};
</script>
<style>
</style>
