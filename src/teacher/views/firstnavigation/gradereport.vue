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
                <el-menu-item index="/gradereport/allPrevious">历次成绩分析</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>班级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/gradereport/classAdministration">行政班</el-menu-item>
                <el-menu-item index="3-2">物理教学班</el-menu-item>
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
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科班级分析</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/yuwenAnalysis">语文</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/shuxueAnalysis">数学</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/yingyuAnalysis">英语</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/wuliAnalysis">物理</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/huaxueAnalysis">化学</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/shengwuAnalysis">生物</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/zhengzhiAnalysis">政治</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/lishiAnalysis">历史</el-menu-item>
                <el-menu-item index="/gradereport/singleSubjectClassAnalysis/diliAnalysis">地理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>单科班级对比</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/yuwenComparison">语文</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/shuxueComparison">数学</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/yingyuComparison">英语</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/wuliComparison">物理</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/huaxueComparison">化学</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/shengwuComparison">生物</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/zhengzhiComparison">政治</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/lishiComparison">历史</el-menu-item>
                <el-menu-item index="/gradeport/singleSubjectClassComparison/diliComparison">地理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="7">
              <i class="el-icon-menu"></i>
              <span slot="title">试卷分析</span>
            </el-menu-item>
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
    handleOpen () {
    },
    handleClose () {
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
  width: 95%;
  padding-bottom: 10px;
  background-color: #ffffff;
  margin-left: 4%;
  border-radius: 10px;
}
.functioncontainer {
  text-align: center;
  /* width: 200px; */
}
</style>
