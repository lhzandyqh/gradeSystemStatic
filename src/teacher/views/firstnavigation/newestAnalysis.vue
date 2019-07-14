<template>
  <div class="appcontainer">
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
    </el-row>
    <el-row>
      <p style="text-align:right">
        <el-button icon="el-icon-upload2">导出年级成绩六率分析报表</el-button>
      </p>
      <div style="padding:10px 0;font-size:14px;color:#333">
        高分率：90%-100%
        优秀率：85%-90%
        良好率：75%-85%
        及格率：60%-75%
        低分率：60%-75%超均率：超过平均分概率
      </div>
      <el-table :data="newList" border style="width: 100%;align-content: center">
        <el-table-column prop="subjectname" label="学科" width="100"></el-table-column>
        <el-table-column prop="score" label="类别" width="100"></el-table-column>
        <el-table-column prop="classIndex" label="人数" width="100"></el-table-column>
        <el-table-column prop="classArg" label="平均分" width="100"></el-table-column>
        <el-table-column prop="schoolIndex" label="标准差" width="100"></el-table-column>
        <el-table-column prop="highnum" label="高分人数"></el-table-column>
        <el-table-column prop="高分率" label="高分率" width="100"></el-table-column>
        <el-table-column prop="goodnumbers" label="优秀人数" width="100"></el-table-column>
        <el-table-column prop="优秀率" label="优秀率" width="100"></el-table-column>
        <el-table-column prop="mediumnum" label="良好人数" width="100"></el-table-column>
        <el-table-column prop="良好率" label="良好率" width="100"></el-table-column>
        <el-table-column prop="passnumbers" label="及格人数"></el-table-column>
        <el-table-column prop="及格率" label="及格率" width="100"></el-table-column>
        <el-table-column prop="failnum" label="低分人数" width="100"></el-table-column>
        <el-table-column prop="低分率" label="低分率" width="100"></el-table-column>
        <el-table-column prop="beyondnum" label="超均人数" width="100"></el-table-column>
        <el-table-column prop="超均率" label="超均率"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import { teachClassTotalSubjectContrast } from "@/api/studentGetData";
import tableTitle from "@/components/tables/tableTitle";
export default {
  components: {
    tableTitle
  },
  data() {
    return {
      newList: [],
      name: "年级成绩六率分析"
    };
  },
  mounted() {},
  created() {
    this.getList();
  },
  methods: {
    getList() {
      teachClassTotalSubjectContrast().then(res => {
        if (res.data.errno === 200) {
          this.newList = res.data.info;

       
        }
      });
    }
  }
};
</script>
<style>
</style>
