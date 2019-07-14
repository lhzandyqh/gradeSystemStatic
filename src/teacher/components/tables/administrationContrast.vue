<template>
  <div>
    <el-row>
      <div style="text-align:right">
        <el-button>导出行政班成绩六率分析报表</el-button>
      </div>
    </el-row>
    <el-row>
      <el-table :data="list" border style="width: 100%;align-content: center;margin:20px auto;">
        <el-table-column prop="subjecttype" label="学科"></el-table-column>
        <el-table-column prop="gradename" label="类别"></el-table-column>
        <el-table-column prop="classIndex" label="人数"></el-table-column>
        <el-table-column prop="classArg" label="平均分"></el-table-column>
        <el-table-column prop="date" label="等级分"></el-table-column>
        <el-table-column prop="highnum" label="高分人数"></el-table-column>
        <el-table-column prop="高分率" label="高分率"></el-table-column>
        <el-table-column prop="goodnumbers" label="优秀人数"></el-table-column>
        <el-table-column prop="优秀率" label="优秀率"></el-table-column>
        <el-table-column prop="mediumnum" label="良好人数"></el-table-column>

        <el-table-column prop="良好率" label="良好率"></el-table-column>
        <el-table-column prop="passnumbers" label="及格人数"></el-table-column>
        <el-table-column prop="及格率" label="及格率"></el-table-column>
        <el-table-column prop="failnum" label="低分人数"></el-table-column>

        <el-table-column prop="低分率" label="低分率"></el-table-column>
        <el-table-column prop="beyondnum" label="超均人数"></el-table-column>
        <el-table-column prop="超均率" label="超均率"></el-table-column>
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
import { AdminClassAllcompare } from "@/api/studentGetData";
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
      ]
    };
  },
  methods:{
    getList(){
      AdminClassAllcompare().then(res =>{
       if(res.data.errno===200){
         this.list = res.data.info
       }
      })
    }
  },
  mounted(){
    this.getList()
  }
};
</script>
<style>
</style>
