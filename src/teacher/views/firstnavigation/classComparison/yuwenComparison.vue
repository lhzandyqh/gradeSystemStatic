<template>
  <div class="app-container">
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
  name: 'yuwenComparison'
}
</script>

<style scoped>
  .app-container{
    margin-left: 0%;
  }

</style>
