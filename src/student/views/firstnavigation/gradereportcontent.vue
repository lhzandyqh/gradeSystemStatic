<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-menu   router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/gradereport/gradereportcontent/classgradetable">班成绩单</el-menu-item>
          <el-menu-item index="/gradereport/gradereportcontent/personalGradeDetails">个人成绩详情</el-menu-item>
          <el-menu-item index="/gradereport/gradereportcontent/allgradeoverview">全科成绩概况</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>

        <router-view></router-view>

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
