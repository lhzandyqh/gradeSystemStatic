<template>
  <div class="app-container">
<!--    <h1>这是成绩报告组件</h1>-->
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              router
              :default-active="$route.path"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose">
              <el-menu-item index="/gradereport/gradereportcontent">
                <i class="el-icon-news"></i>
                <span slot="title">成绩概况</span>
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
        </el-row>
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
    handleOpen () {
    },
    handleClose () {
    }
  }
}
</script>

<style scoped>
  .app-container{
    width: 93%;
    padding-bottom:10px;
    background-color: #ffffff;
    margin-left: 4%;
    border-radius:10px
  }
  .functioncontainer{
    text-align: center;
    width:200px
  }
</style>
