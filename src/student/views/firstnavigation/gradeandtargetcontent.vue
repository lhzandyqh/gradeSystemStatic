<template>
  <div class="app-container">
    <el-container>
      <el-header>
        <el-menu   router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="/gradereport/gradeandtargetcontent/beyondself">超越自我</el-menu-item>
          <el-menu-item index="/gradereport/gradeandtargetcontent/heropk">英雄PK</el-menu-item>
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
