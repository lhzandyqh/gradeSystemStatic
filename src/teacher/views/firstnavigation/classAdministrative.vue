<template>
  <div class="appcontainer">
    <!-- 科目 -->
    <el-row>
      <subjectTable></subjectTable>
    </el-row>
    <!-- 列表 -->
    <el-row>
      <allClassGradeTable></allClassGradeTable>
    </el-row>
  </div>
</template>
<script>
import subjectTable from '@/components/tables/subjectTable'
import allClassGradeTable from '@/components/tables/allClassGradeTable'
export default {
  components: {
    allClassGradeTable,
    subjectTable
  },
  data () {
    return {}
  }
}
</script>
<style>
</style>
