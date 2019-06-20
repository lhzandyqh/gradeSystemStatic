<template>
  <div class="tablecontainer">
    <span style="font-size: 12px;">向上的红色箭头“↑5”表示前进5名 向下的绿色箭头“↓5”表示后退5名 “0”表示排名无变化 “--”表示未获得上次考试信息</span>
    <el-table
      :data="allGradeTableData"
      :align="center"
      border
      height="400"
      style="width: 100%;margin-top:10px;"
    >
      <el-table-column
        v-for="(item,index) in tableHeader"
        :key="index"
        :prop="item.prop"
        :label="item.lable"
        align="center"
      ></el-table-column>
    </el-table>
    <el-pagination
      style="margin-top:20px;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: 'allClassGradeTable',
  props: {
    allGradeTableData: {
      type: Array,
      required: true
    },
    tableHeader: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      currentPage4: 4

    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
