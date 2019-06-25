<template>
  <div class="appcontainer">
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
    </el-row>
    <el-row>
      <el-table :data="newList" border style="width: 50%;align-content: center;margin:20px auto;">
        <el-table-column prop="date" label="日期"></el-table-column>
        <el-table-column prop="score" label="考试名称"></el-table-column>
        <el-table-column prop="classIndex" label="平均分"></el-table-column>
        <el-table-column prop="classArg" label="标准差"></el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <histogram></histogram>
    </el-row>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
import histogram from "@/components/charts/histogram";
export default {
  components: {
    tableTitle,
    histogram
  },
  data() {
    return {
      name: "年级历次成绩分析",
      newList: [
        {
          date: "2019-6-25"
        }
      ]
    };
  }
};
</script>

<style>
</style>