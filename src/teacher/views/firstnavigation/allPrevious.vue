<template>
  <div class="appcontainer">
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
    </el-row>
    <el-row>
      <el-table :data="newList" border style="width: 50%;align-content: center;margin:20px auto;">
        <el-table-column prop="exam_date" align="center" label="日期"></el-table-column>
        <el-table-column prop="exam_type" align="center" label="考试名称"></el-table-column>
        <el-table-column prop="pingjun" align="center" label="平均分"></el-table-column>
        <el-table-column prop="biaozhun" align="center" label="标准差"></el-table-column>
      </el-table>
    </el-row>
    <el-row >
 <span style="font-weight: bold;color: #18a689">─ 学期内年级历次总成绩变化趋势图 ─</span>
     <div style="padding-left:25%;margin-top:20px">
      
        <histogram :chartData='chartData'></histogram>
     </div>
    </el-row>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
import histogram from "@/components/charts/histogram";
import { gradePreviousAnalysis } from "@/api/studentGetData";
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
      ],
      chartData:{},
    };
  },
  mounted(){

  },
  created(){
this.getList()
  },
  methods:{
    getList(){
      gradePreviousAnalysis().then(res =>{
        if(res.status === 200){
          this.newList = res.data.json
        }
      })
    }
  }
};
</script>

<style>
</style>