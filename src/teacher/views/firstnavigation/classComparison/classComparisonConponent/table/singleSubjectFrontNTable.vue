<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="date"
        label="年级"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="科目"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="班级"
        align="center"
        width="60">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校前100名人数"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校前100名排名"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校前200名人数"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校前200名排名"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="校前300名人数"
        align="center"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="校前300名排名">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'singleSubjectFrontNTable'
}
</script>

<style scoped>

</style>
