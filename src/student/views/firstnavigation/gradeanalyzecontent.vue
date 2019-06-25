<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-menu   router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/gradereport/gradeanalyzecontent/weakspot">强弱分析</el-menu-item>
          <el-menu-item index="/gradereport/gradeanalyzecontent/subjectComparativeAnalysis">单科时序对比分析</el-menu-item>
          <el-menu-item index="/gradereport/gradeanalyzecontent/advantageStableSubject">优势及稳定学科</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'gradereportcontent',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .app-container{
    margin-left: 0%;
  }

</style>
