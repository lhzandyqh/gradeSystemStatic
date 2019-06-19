<template>
  <div class="appcontainer">
    <!-- 科目类别 + 查询 -->
    <el-row>
      <subjectTable></subjectTable>
    </el-row>

    <!-- 列表 -->
    <el-row style="margin-top: 20px;">
      <all-class-grade-table :allGradeTableData="allGradeTableData"></all-class-grade-table>
    </el-row>
  </div>
</template>

<script>
import allClassGradeTable from '@/components/tables/allClassGradeTable'
import subjectTable from '@/components/tables/subjectTable'
import { getClassGradeTable } from '@/api/studentGetData'
export default {
  name: 'classgradetable',
  components: { allClassGradeTable, subjectTable },
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
</style>
