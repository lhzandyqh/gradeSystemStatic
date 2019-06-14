<template>
  <div class="appcontainer">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #18a689">─班级成绩单─</span>
    </el-row>
    <el-row>
      <div class="all-subject">
        <ul class="subject">
          <li>全科</li>
          <li>语文</li>
          <li>数学</li>
          <li>英语</li>
          <li>物理</li>
          <li>化学</li>
          <li>生物</li>
          <li>历史</li>
          <li>地理</li>
          <li>政治</li>
        </ul>
      </div>
    </el-row>
    <el-row>
      <div class="query">
        <el-input placeholder="请输入学生考号/姓名" style="width:250px;">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button>导出年级报表</el-button>
      </div>
    </el-row>
    <el-row style="margin-top: 20px;">
      <all-class-grade-table :allGradeTableData="allGradeTableData"></all-class-grade-table>
    </el-row>
  </div>
</template>

<script>
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import { getClassGradeTable } from '@/api/studentGetData'
export default {
  name: 'classgradetable',
  components: { allClassGradeTable },
  mounted () {
    this.getGradeTableData()
  },
  data () {
    return {
      radio: 1,
      allGradeTableData: []
    }
  },
  methods: {
    getGradeTableData: function () {
      const prams = {
        userID: 1
      }
      getClassGradeTable(prams).then(response => {
        this.allGradeTableData = response.data.info
      })
    }
  }
}
</script>

<style scoped>
ul li {
  list-style: none;
  margin: 0;
  padding: 0;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}
.all-subject {
  border-top: 1px solid #18a689;
  margin: 40px 105px 0 105px;
}
.subject {
  display: flex;
  margin: 0;
  padding: 0;
}
.subject li {
  padding: 10px 38px;
}
.subject li:hover {
  color: #fff;
  background-color: #18a689;
}
.query{
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
