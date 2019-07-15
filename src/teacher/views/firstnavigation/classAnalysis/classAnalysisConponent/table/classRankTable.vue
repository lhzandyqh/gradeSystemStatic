<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="科目"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        label="班级人数"
        width="80">
      </el-table-column>
      <el-table-column align="center" label="高分【90%~100%】">
        <el-table-column
          prop="name"
          align="center"
          label="高分人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="高分率"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="优秀【85%~90%】">
        <el-table-column
          prop="name"
          align="center"
          label="优秀人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="优秀率"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column  align="center" label="良好【75%~85%】">
        <el-table-column
          prop="name"
          align="center"
          label="良好人数"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          align="center"
          label="良好率"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column align="center" label="及格【60%~75%】">
        <el-table-column
          prop="name"
          align="center"
          label="及格人数"
          width="100">
        </el-table-column>
        <el-table-column
          align="center"
          prop="name"
          label="及格率"
          width="100">
        </el-table-column>
      </el-table-column>
      <el-table-column label="低分【0%~60%】">
        <el-table-column
          prop="name"
          label="低分人数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="低分率"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'classRankTable'
}
</script>

<style scoped>

</style>
