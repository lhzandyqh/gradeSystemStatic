<template>
  <div class="app-container">
    <!--    <h1>这是成绩报告组件</h1>-->
    <el-container>
      <el-aside>
        <el-col>
          <el-menu
            default-active="/gradereport/gradereportcontent"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#fff"
            text-color="#333"
            active-text-color="#18a689"
            style="width:240px"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>年级概况</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/gradereport/gradereportcontent">年级成绩单</el-menu-item>
                <el-menu-item index="/gradereport/classAdministrative">行政班单科成绩</el-menu-item>
                <el-menu-item index="/gradereport/classTeaching">教学班单科成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>年级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/gradereport/newestAnalysis">最新成绩分析</el-menu-item>
                <el-menu-item >历次成绩分析</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>班级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">行政班</el-menu-item>
                <el-menu-item index="3-2">物理教学班</el-menu-item>
                <el-menu-item index="3-3">化学教学班</el-menu-item>
                <el-menu-item index="3-4">生物教学班</el-menu-item>
                <el-menu-item index="3-5">历史教学班</el-menu-item>
                <el-menu-item index="3-6">地理教学班</el-menu-item>
                <el-menu-item index="3-7">政治教学班</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>班级对比</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">行政班</el-menu-item>
                <el-menu-item index="4-2">物理教学班</el-menu-item>
                <el-menu-item index="4-3">化学教学班</el-menu-item>
                <el-menu-item index="4-4">生物教学班</el-menu-item>
                <el-menu-item index="4-5">历史教学班</el-menu-item>
                <el-menu-item index="4-6">地理教学班</el-menu-item>
                <el-menu-item index="4-7">政治教学班</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">语文</el-menu-item>
                <el-menu-item index="5-2">数学</el-menu-item>
                <el-menu-item index="5-3">英语</el-menu-item>
                <el-menu-item index="5-4">物理</el-menu-item>
                <el-menu-item index="5-5">化学</el-menu-item>
                <el-menu-item index="5-6">生物</el-menu-item>
                <el-menu-item index="5-7">历史</el-menu-item>
                <el-menu-item index="5-8">地理</el-menu-item>
                <el-menu-item index="5-9">政治</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科对比</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">语文</el-menu-item>
                <el-menu-item index="6-2">数学</el-menu-item>
                <el-menu-item index="6-3">英语</el-menu-item>
                <el-menu-item index="6-4">物理</el-menu-item>
                <el-menu-item index="6-5">化学</el-menu-item>
                <el-menu-item index="6-6">生物</el-menu-item>
                <el-menu-item index="6-7">历史</el-menu-item>
                <el-menu-item index="6-8">地理</el-menu-item>
                <el-menu-item index="6-9">政治</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-aside>
      <el-main class="functioncontainer">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'gradereport',
  data () {
    return {
      type: 1
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
    // toNew () {
    //   this.$router.push({
    //     path: '../gradereport/successivegrade"'
    //   })
    // }
  }
}
</script>

<style scoped>
.app-container {
  width: 93%;
  padding-bottom: 10px;
  background-color: #ffffff;
  margin-left: 4%;
  border-radius: 10px;
}
.functioncontainer {
  text-align: center;
  width: 200px;
}
</style>
