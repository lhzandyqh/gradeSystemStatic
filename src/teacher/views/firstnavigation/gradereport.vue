<template>
  <div class="app-container">
    <!--    <h1>这是成绩报告组件</h1>-->
    <el-container>
      <el-aside>
        <el-col>
          <el-menu
            default-active="2"
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
                <el-menu-item index="/gradereport/gradereportcontent" :unique-opened="true">年级成绩单</el-menu-item>
                <el-menu-item index="/gradereport/successivegrade">行政班单科成绩</el-menu-item>
                <el-menu-item index="1-3">教学班单科成绩</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>年级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item>最新成绩分析</el-menu-item>
                <el-menu-item index="/gradereport/successivegrade">历次成绩分析</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>班级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">行政班</el-menu-item>
                <el-menu-item index="1-2">物理教学班</el-menu-item>
                <el-menu-item index="1-3">化学教学班</el-menu-item>
                <el-menu-item index="1-4">生物教学班</el-menu-item>
                <el-menu-item index="1-5">历史教学班</el-menu-item>
                <el-menu-item index="1-6">地理教学班</el-menu-item>
                <el-menu-item index="1-7">政治教学班</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>班级对比</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">行政班</el-menu-item>
                <el-menu-item index="1-2">物理教学班</el-menu-item>
                <el-menu-item index="1-3">化学教学班</el-menu-item>
                <el-menu-item index="1-4">生物教学班</el-menu-item>
                <el-menu-item index="1-5">历史教学班</el-menu-item>
                <el-menu-item index="1-6">地理教学班</el-menu-item>
                <el-menu-item index="1-7">政治教学班</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">语文</el-menu-item>
                <el-menu-item index="1-2">数学</el-menu-item>
                <el-menu-item index="1-3">英语</el-menu-item>
                <el-menu-item index="1-4">物理</el-menu-item>
                <el-menu-item index="1-5">化学</el-menu-item>
                <el-menu-item index="1-6">生物</el-menu-item>
                <el-menu-item index="1-7">历史</el-menu-item>
                <el-menu-item index="1-8">地理</el-menu-item>
                <el-menu-item index="1-9">政治</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科对比</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">语文</el-menu-item>
                <el-menu-item index="1-2">数学</el-menu-item>
                <el-menu-item index="1-3">英语</el-menu-item>
                <el-menu-item index="1-4">物理</el-menu-item>
                <el-menu-item index="1-5">化学</el-menu-item>
                <el-menu-item index="1-6">生物</el-menu-item>
                <el-menu-item index="1-7">历史</el-menu-item>
                <el-menu-item index="1-8">地理</el-menu-item>
                <el-menu-item index="1-9">政治</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
        <!-- <el-row class="tac">
          <el-col :span="24">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-menu-item index="/gradereport/gradereportcontent">
                <i class="el-icon-news"></i>
                <span slot="title">年级成绩单</span>
              </el-menu-item>
              <el-menu-item index="/gradereport/successivegrade">
                <i class="el-icon-menu"></i>
                <span slot="title">历次成绩</span>
              </el-menu-item>
              <el-menu-item index="/gradereport/gradeanalyzecontent">
                <i class="el-icon-document"></i>
                <span slot="title">成绩分析</span>
              </el-menu-item>
              <el-menu-item index="/gradereport/gradeandtargetcontent">
                <i class="el-icon-star-on"></i>
                <span slot="title">成绩目标</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>-->
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
