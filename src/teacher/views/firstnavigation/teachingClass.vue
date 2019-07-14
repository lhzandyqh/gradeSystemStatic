<template>
  <div class="appcontainer">
    <el-row>
      <el-select v-model="value" placeholder="请选择科目">
        <el-option
          v-for="item in subjectList"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择班级">
        <el-option v-for="item in classList" :key="item.id" :label="item.value" :value="item.id"></el-option>
      </el-select>
      <el-tabs v-model="activeName">
        <el-tab-pane label="成绩单" name="first">
          <el-row>
            <tableTitle :titleList="name"></tableTitle>
            <all-class-grade-table :allGradeTableData="allGradeTableData" :tableHeader="tableInfo"></all-class-grade-table>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="重点关注" name="second"></el-tab-pane>
        <el-tab-pane label="班校对比" name="third">
            
        </el-tab-pane>
        <el-tab-pane label="等级分布" name="fourth"></el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import tableTitle from "@/components/tables/tableTitle";
import allClassGradeTable from "@/components/tables/allClassGradeTable";
export default {
  components: {
    tableTitle,
    allClassGradeTable
  },
  data() {
    return {
      activeName: "first",
      name: "教学班成绩单",
      subjectList: [
        {
          value: "物理"
        },
        {
          value: "化学"
        },
        {
          value: "地址"
        },
        {
          value: "语文"
        },
        {
          value: "数学"
        }
      ],
      classList: [
        {
          value: "行政1班"
        },
        {
          value: "行政2班"
        },
        {
          value: "行政3班"
        },
        {
          value: "行政4班"
        },
        {
          value: "行政5班"
        }
      ],
      value: "",
      class: "",
      allGradeTableData: [],
      tableInfo: [
        { prop: "id", lable: "序号" },
        { prop: "studentMachineCard", lable: "考号" },
        { prop: "studentName", lable: "姓名" },
        { prop: "classId", lable: "科目" },
        { prop: "coversionTotal", lable: "班级" },
        { prop: "classIndex", lable: "成绩" },
        { prop: "classIndex", lable: "班名次" },
        { prop: "classIndex", lable: "校名次" },
        { prop: "advancefall", lable: "进步/后退" }
      ]
    };
  }
};
</script>
<style>
</style>
