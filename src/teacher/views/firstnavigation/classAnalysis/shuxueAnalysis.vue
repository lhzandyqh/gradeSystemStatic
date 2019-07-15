<template>
  <div class="app-container">
    <h1>这是数学单科班级分析</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="成绩单" name="first">没什么</el-tab-pane>
      <el-tab-pane label="重点关注" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="班校对比" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="等级分布" name="fourth">定时任务补偿</el-tab-pane>
      <el-tab-pane label="历次对比" name="fourth1">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'shuxueAnalysis',
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>
