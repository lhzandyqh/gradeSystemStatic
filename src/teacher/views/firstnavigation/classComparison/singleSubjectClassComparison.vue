<template>
  <div class="app-container">
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'singleSubjectClassComparison'
}
</script>

<style scoped>
  .app-container{
    margin-left: 0%;
  }
</style>
