<template>
  <div class="appcontainer">
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
    </el-row>
    <el-row>
     <p  style="text-align:right"> <el-button icon="el-icon-upload2">导出年级成绩六率分析报表</el-button></p>
      <div style="padding:10px 0;font-size:14px;color:#333">
        高分率：90%-100%
        优秀率：85%-90%
        良好率：75%-85%
        及格率：60%-75%
        低分率：60%-75%超均率：超过平均分概率
      </div>
      <el-table :data="newList" border style="width: 100%;align-content: center">
        <el-table-column prop="subjectName" label="学科" width="100"></el-table-column>
        <el-table-column prop="score" label="类别" width="100"></el-table-column>
        <el-table-column prop="classIndex" label="人数" width="100"></el-table-column>
        <el-table-column prop="classArg" label="平均分" width="100"></el-table-column>
        <el-table-column prop="schoolIndex" label="等级分" width="100"></el-table-column>
        <el-table-column prop="schoolArg" label="高分人数"></el-table-column>
        <el-table-column prop="subjectName" label="高分率" width="100"></el-table-column>
        <el-table-column prop="score" label="优秀人数" width="100"></el-table-column>
        <el-table-column prop="classIndex" label="优秀率" width="100"></el-table-column>
        <el-table-column prop="classArg" label="良好人数" width="100"></el-table-column>
        <el-table-column prop="schoolIndex" label="良好率" width="100"></el-table-column>
        <el-table-column prop="schoolArg" label="及格人数"></el-table-column>
        <el-table-column prop="score" label="及格率" width="100"></el-table-column>
        <el-table-column prop="classIndex" label="低分人数" width="100"></el-table-column>
        <el-table-column prop="classArg" label="低分率" width="100"></el-table-column>
        <el-table-column prop="schoolIndex" label="超均人数" width="100"></el-table-column>
        <el-table-column prop="schoolArg" label="超均率"></el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script>
import tableTitle from '@/components/tables/tableTitle'
export default {
  components: {
    tableTitle
  },
  data () {
    return {
      newList: [
        {
          subjectName: '占位'
        }
      ],
      name: '我只想单纯的测试哈名字'
    }
  }
}
</script>
<style>
</style>
