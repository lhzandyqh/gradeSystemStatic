<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-menu   router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/gradereport/gradereportcontent/personalGradeDetails">我的成绩单</el-menu-item>
          <el-menu-item index="/gradereport/gradereportcontent/allgradeoverview">成绩概况</el-menu-item>
          <el-menu-item index="/gradereport/gradereportcontent/classgradetable">班级成绩单</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <div class="inner-container">
          <div class="content">
            <router-view></router-view>
          </div>
        </div>
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
    height: 600px;
  }
  .inner-container::-webkit-scrollbar {
    display: none;
  }
</style>
