<template>
  <div>
    <el-row>
      <div style="text-align:right">
        <el-button>导出行政班成绩六率分析报表</el-button>
      </div>
    </el-row>
    <el-row>
      <el-table :data="list" border style="width: 100%;align-content: center;margin:20px auto;">
        <el-table-column prop="hh" label="学科"></el-table-column>
        <el-table-column prop="score" label="类别"></el-table-column>
        <el-table-column prop="classIndex" label="人数"></el-table-column>
        <el-table-column prop="classArg" label="平均分"></el-table-column>
        <el-table-column prop="date" label="等级分"></el-table-column>
        <el-table-column prop="score" label="高分人数"></el-table-column>
        <el-table-column prop="classIndex" label="高分率"></el-table-column>
        <el-table-column prop="classArg" label="优秀人数"></el-table-column>
        <el-table-column prop="date" label="优秀率"></el-table-column>
        <el-table-column prop="score" label="良好人数"></el-table-column>

        <el-table-column prop="classIndex" label="良好率"></el-table-column>
        <el-table-column prop="classArg" label="及格人数"></el-table-column>
        <el-table-column prop="date" label="及格率"></el-table-column>
        <el-table-column prop="score" label="低分人数"></el-table-column>

        <el-table-column prop="classIndex" label="低分率"></el-table-column>
        <el-table-column prop="classArg" label="超均人数"></el-table-column>
        <el-table-column prop="classArg" label="超均率"></el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
      <el-select v-model="value" placeholder="请选择对比类别：">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div style="margin:0 auto">
        <csline></csline>
      </div>
    </el-row>
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
      <el-select v-model="value" placeholder="请选择对比类别：">
        <el-option
          v-for="item in sixList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div style="margin:0 auto">
        <csline :chartData="list"></csline>
      </div>
    </el-row>
  </div>
</template>

<script>
import tableTitle from "@/components/tables/tableTitle";
import csline from "@/components/charts/cs-line";
export default {
  components: { csline, tableTitle },
  data() {
    return {
      name: "各科目班校对比图",
      name1: "各科六率班校对比图",
      list: {},
      options: [
        {
          value: "1",
          label: "平均分"
        },
        {
          value: "2",
          label: "等级分"
        }
      ],
      sixList: [
        {
          value: "1",
          label: "高分率"
        },
        {
          value: "2",
          label: "优秀率"
        },
        {
          value: "3",
          label: "良好率"
        },
        {
          value: "4",
          label: "及格率"
        },
        {
          value: "5",
          label: "低分率"
        },
        {
          value: "6",
          label: "超均率"
        }
      ],
      list: [
        {
          hh: "全科"
        },
        {
          hh: "语文"
        },
        {
          hh: "数学"
        },
        {
          hh: "英语"
        }
      ]
    };
  }
};
</script>
<style>
</style>
