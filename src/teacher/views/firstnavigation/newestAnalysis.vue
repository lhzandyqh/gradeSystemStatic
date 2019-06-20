<template>
  <div>
    <el-row>
      <tableTitle :titleList="name"></tableTitle>
    </el-row>
    <el-row>
      <el-table :data="newList" border style="width: 80%;align-content: center">
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
      newList: [{
        subjectName: '占位'
      }],
      name: '我只想单纯的测试哈名字'
    }
  }
}
</script>
<style>
</style>
