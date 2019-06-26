<template>
  <div class="container">
    <el-row>
      <el-table
        :data="rankChangeData"
        border
        style="width: 120%">
        <el-table-column
          align="center"
          prop="schoolindexprogess"
          width="150"
          label="总成绩排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="yuwenprogess"
          label="语文排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="shuxueprogess"
          label="数学排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="yingyuprogess"
          label="英语排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="wuliprogess"
          label="物理排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="huaxueprogess"
          label="化学排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="shengwuprogess"
          label="生物排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="zhengzhiprogess"
          label="政治排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="diliprogess"
          label="地理排名">
        </el-table-column>
        <el-table-column
          align="center"
          prop="lishiprogess"
          label="历史排名">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'rankChangeTable',
  props: {
    rankChangeData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
