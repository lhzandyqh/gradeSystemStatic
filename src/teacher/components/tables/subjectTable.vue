<template>
 <div>
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
 </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
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
  margin: 40px 0 0 0;
  width: 100%;
}
.subject {
  display: flex;
  margin: 0;
  padding: 0;
}
.subject li {
  width: 11%;
  padding: 2% 0;
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
