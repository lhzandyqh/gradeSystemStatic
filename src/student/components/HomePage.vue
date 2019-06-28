<template>
  <div class="container" >
    <el-container class="con_section">
      <el-header class="header">
<!--        <div class="navigationcontainer"><h3 class="logoclass">LOGO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;中科智禾</h3></div>-->
        <div class="navigationcontainer">
        <el-row :gutter="6">
          <el-col :span="5">
            <div class="logoContainer">
              <img v-bind:src="imgUrl" width="100%" height="80%">
            </div>
          </el-col>
          <el-col :span="2" :offset="3">
            <div class="navigationoption">
              <img src="../assets/icon/u133.png">
              <span v-on:click="gofisrtpage">平台首页</span>
<!--              <router-link to="/fisrtpage">首页</router-link>-->
            </div>
          </el-col>
          <el-col :span="2">
            <div class="navigationoption">
              <img src="../assets/icon/u110.png">
              <span v-on:click="gogradereport">成绩报告</span>
<!--              <router-link to="/gradereport">成绩报告</router-link>-->
            </div>
          </el-col>
          <el-col :span="2">
            <div class="navigationoption">
              <img src="../assets/icon/u114.png">
              <span v-on:click="gopaperanalysis">错题记录</span>
<!--              <router-link to="/paperanalysis">试卷分析</router-link>-->
            </div>
          </el-col>
          <el-col :span="2">
            <div class="navigationoption">
              <img src="../assets/icon/u110.png">
              <span v-on:click="gouserfeedback">考试总结</span>
<!--              <router-link to="/userfeedback">用户反馈</router-link>-->
            </div>
          </el-col>
          <el-col :span="1" :offset="5">
<!--            <div class="navigationoption">-->
<!--              <img src="../assets/icon/u125.png">-->
<!--            </div>-->
            <user-setting-popover></user-setting-popover>
          </el-col>
        </el-row>
        </div>
      </el-header>
      <el-container class="containerone">
<!--        <el-aside width="200px">-->
<!--          <router-view></router-view>-->
<!--        </el-aside>-->
        <el-main class="main">
          <div class="maincontent" style="text-align: center">
            <router-view></router-view>
          </div>
          <div class="copyrightContainer">
            <span style="font-size: 12px">Copyright&nbsp;&nbsp;&nbsp;中科智禾教育大数据中心   ©2019</span>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { getUserInformation, getClassGradeTable } from '~/api/studentGetData'
import userSettingPopover from '~/components/user/userSettingPopover'
export default {
  name: 'HomePage',
  components: { userSettingPopover },
  data () {
    return {
      imgUrl: require('../../../static/images/homepagelogo.png'),
      examData: [],
      examType: '',
      studentInformation: [{
        studentName: '',
        studentNumber: '',
        id: '',
        gradeName: '',
        className: ''
      }]
      // toPopoverData: this.studentInformation[0].studentName
    }
  },
  mounted () {
    this.getUserName()
    this.getExamType()
  },
  methods: {
    getExamType: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getClassGradeTable(prams).then(response => {
        this.examData = response.data.info
        this.examType = this.examData[0].examType
        console.log(this.examType)
        window.localStorage.setItem('examType', this.examType) // 把examType存入缓存
      })
    },
    getUserName: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getUserInformation(prams).then(response => {
        this.dataSpace = response.data.info
        this.$set(this.studentInformation, 0, {studentName: this.dataSpace[0].studentName, studentNumber: this.dataSpace[0].studentNumber, id: this.dataSpace[0].id, gradeName: this.dataSpace[0].gradeName, className: this.dataSpace[0].className})
        console.log(this.studentInformation)
        window.localStorage.setItem('studentName', this.studentInformation[0].studentName)
        window.localStorage.setItem('studentNumber', this.studentInformation[0].studentNumber)
      })
    },
    gofisrtpage: function () {
      // this.$router.go('/fisrtpage')
      this.$router.push('/fisrtpage')
    },
    gogradereport: function () {
      // this.$router.go('/fisrtpage')
      this.$router.push('/gradereport')
    },
    gopaperanalysis: function () {
      // this.$router.go('/paperanalysis')
      this.$router.push('/paperanalysis')
    },
    gouserfeedback: function () {
      // this.$router.go('/userfeedback')
      this.$router.push('/userfeedback')
    }
  }
}
</script>

<style scoped>
  .con_section{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left:0px;
    width:100%;
  }
  .header {
    height: 300px;
    line-height: 60px;
    background: rgba(26, 169, 76, 0.84);
    color: #fff;
  }
  .logoclass{
    float: left;
    height: 60px;
    margin: 0 20px;
    width: 300px;
  }
  .main{
    background-color: honeydew;
    text-align: center;
  }
  .containerone{
    width: 100%;
    height: 600px;
    text-align: center;
  }
  .navigationoption {
    cursor:pointer
  }
  .copyrightContainer{
    padding-top: 20px;
    text-align: center;
  }

</style>
