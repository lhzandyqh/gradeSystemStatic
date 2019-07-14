<template>
  <div class="appcontainer">
    <!-- 科目 -->
    <el-row>
      <subjectTable></subjectTable>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <allClassGradeTable :allGradeTableData="list" :tableHeader="listInfo"></allClassGradeTable>
    </el-row>
  </div>
</template>
<script>
import subjectTable from "@/components/tables/subjectTable";
import allClassGradeTable from "@/components/tables/allClassGradeTable";
import { teachClassSingleSubjectScore } from "@/api/studentGetData";
export default {
  components: {
    allClassGradeTable,
    subjectTable
  },
  data() {
    return {
      list: [],
      listInfo: [
        { prop: "classidname", lable: "序号" },
        { prop: "studentnuber", lable: "考号" },
        { prop: "studentname", lable: "姓名" },
        { prop: "gradeidname", lable: "班级/行政班" },
        { prop: "score", lable: "语文成绩" },
        { prop: "classindex", lable: "班名次" },
        { prop: "schoolindex", lable: "校名次" },
        { prop: "advancefall", lable: "进步/后退" }
      ]
    };
  },
  methods: {
    // 列表数据
    getGradeTableData: function()  {
      // const prams = {
      //   userID: 1
      // }
      teachClassSingleSubjectScore().then(response => {
        if (response.data.errno === 200) {
        let list = response.data.info;
          
          for (let i = 0; i < list.length; i++) {
            this.list = list[i];
            
          }
        }
        console.log(response, 999888);
      });
    }
  },
  mounted() {
    this.getGradeTableData();
  }
};
</script>
<style>
</style>
