<template>
  <div class="app-container">
    <el-row>
      <el-row>
        <div class="informationclass">
<!--          <span>个人最新成绩</span>-->
          <el-card class="box-card-father">
            <span class="informationtitle">个人最新成绩信息</span>
            <br>
            <el-card class="box-card-son">
              <div class="informationcontent">
                <span>本次成绩</span>
                <br>
                <span>{{this.gradeInformation[0].coversionTotal}}</span>
              </div>
            </el-card>
            <el-card class="box-card-son">
              <div class="informationcontent">
                <span>班级占位</span><br>
                <span style="font-size: 20px">{{this.gradeInformation[0].classIndex}}</span><br>
                <span>年级占位:{{this.gradeInformation[0].schoolIndex}}</span>
              </div>
            </el-card>
            <el-card class="box-card-son">
              <div class="informationcontent">
                <span>进步最快学科</span><br>
                <br>
                <span style="font-size: 20px">数学</span>
              </div>
            </el-card>
            <el-card class="box-card-son">
              <div class="informationcontent">
                <span>需提高科目</span><br>
                <br>
                <span style="font-size: 20px">化学</span>
              </div>
            </el-card>
          </el-card>
        </div>
      </el-row>
      <el-row :gutter="20">
        <el-col span="4" offset="2">
          <el-card class="box-card" style="height: 350px">
            <div slot="header" class="clearfix">
              <span style="color: #19c237;font-weight: bold">学生信息</span>
            </div>
            <div class="studentself">
              <table style="margin: auto;padding-top: 30px">
                <tr><td><a> <span>姓名：</span><span style="color: #19c237">{{this.studentInformation[0].studentName}}</span><br></a></td></tr>
                <tr><td><a> <span>学籍号：</span><span style="color: #19c237">{{this.studentInformation[0].studentNumber}}</span><br></a></td></tr>
                <tr><td><a> <span>考试号：</span><span style="color: #19c237">{{this.studentInformation[0].id}}</span><br></a></td></tr>
                <tr><td><a> <span>年级：</span><span style="color: #19c237">{{this.studentInformation[0].gradeName}}</span><br></a></td></tr>
                <tr><td><a> <span>班级：</span><span style="color: #19c237">{{this.studentInformation[0].className}}</span><br></a></td></tr>
              </table>
            </div>
          </el-card>
        </el-col>
        <el-col span="16">
          <el-card class="box-card" style="height: 350px">
            <div slot="header" class="clearfix">
              <span  style="color: #19c237;font-weight: bold">考试列表</span>
            </div>
            <div class="block">
<!--              <el-timeline>-->
<!--                <el-timeline-item-->
<!--                  v-for="(activity, index) in activities"-->
<!--                  :key="index"-->
<!--                  :timestamp="activity.timestamp">-->
<!--                  <div class="examreport">-->
<!--                    <span style="font-weight: bold">{{activity.content}}</span>  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查看报告</span>-->
<!--                  </div>-->
<!--                </el-timeline-item>-->
<!--              </el-timeline>-->
              <el-timeline>
                <el-timeline-item>
                  <div class="timelinecontainer">
                    <div class="exam">
                      <span style="font-weight: bold">{{activities[0].content}}</span>
                    </div>
                    <div class="timestamp">
                      <span style="font-weight: bold">{{activities[0].timestamp}}</span>
                    </div>
                    <div class="report">
                      <span style="padding-right: 100px">查看报告</span>
                    </div>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timelinecontainer">
                    <div class="exam">
                      <span style="font-weight: bold">{{activities[1].content}}</span>
                    </div>
                    <div class="timestamp">
                      <span style="font-weight: bold">{{activities[1].timestamp}}</span>
                    </div>
                    <div class="report">
                      <span style="padding-right: 100px">查看报告</span>
                    </div>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timelinecontainer">
                    <div class="exam">
                      <span style="font-weight: bold">{{activities[2].content}}</span>
                    </div>
                    <div class="timestamp">
                      <span style="font-weight: bold">{{activities[2].timestamp}}</span>
                    </div>
                    <div class="report">
                      <span style="padding-right: 100px">查看报告</span>
                    </div>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timelinecontainer">
                    <div class="exam">
                      <span style="font-weight: bold">{{activities[3].content}}</span>
                    </div>
                    <div class="timestamp">
                      <span style="font-weight: bold">{{activities[3].timestamp}}</span>
                    </div>
                    <div class="report">
                      <span style="padding-right: 100px">查看报告</span>
                    </div>
                  </div>
                </el-timeline-item>
                <el-timeline-item>
                  <div class="timelinecontainer">
                    <div class="exam">
                      <span style="font-weight: bold">{{activities[4].content}}</span>
                    </div>
                    <div class="timestamp">
                      <span style="font-weight: bold">{{activities[4].timestamp}}</span>
                    </div>
                    <div class="report">
                      <span style="padding-right: 100px">查看报告</span>
                    </div>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { getUserInformation, getUserGrade, getExamInformation } from '@/api/studentGetData'
export default {
  name: 'firstpage',
  mounted () {
    this.getStudentInformation()
    this.getStudentGrade()
    this.getStudentExam()
  },
  methods: {
    getStudentInformation: function () {
      const prams = {
        userID: 1
      }
      getUserInformation(prams).then(response => {
        // console.log(response.data.errmsg)
        // console.log(response.data.info)
        // this.studentInformation = response.data.info
        // console.log('第二次输出')
        // console.log(this.studentInformation)
        // console.log(response.data.info.studentName)
        this.dataSpace = response.data.info
        // console.log(this.dataSpace)
        // console.log(this.dataSpace[0].studentName)
        this.$set(this.studentInformation, 0, {studentName: this.dataSpace[0].studentName, studentNumber: this.dataSpace[0].studentNumber, id: this.dataSpace[0].id, gradeName: this.dataSpace[0].gradeName, className: this.dataSpace[0].className})
      })
      // console.log(this.studentInformation)
      // eslint-disable-next-line no-undef
      // this.$set(this.studentInformation, 0, {studentName: response.data.info.studentName})
    },
    getStudentGrade: function () {
      const prams = {
        userID: 1
      }
      getUserGrade(prams).then(response => {
        this.dataSpaceGrade = response.data.info
        this.$set(this.gradeInformation, 0, {coversionTotal: this.dataSpaceGrade.coversionTotal, schoolIndex: this.dataSpaceGrade.schoolIndex, classIndex: this.dataSpaceGrade.classIndex})
      })
      // console.log(this.gradeInformation)
    },
    getStudentExam: function () {
      const prams = {
        userID: 1
      }
      getExamInformation(prams).then(response => {
        this.dataSpaceExam = response.data.info
        this.dataSpaceExam.push(response.data.info)
        this.dataSpaceExam.pop()
        console.log(response.data.info)
        console.log(this.dataSpaceExam)
        console.log(this.timeFormat(this.dataSpaceExam[0].examDate))
        this.$set(this.activities, 0, {content: this.dataSpaceExam[0].examName, timestamp: this.timeFormat(this.dataSpaceExam[0].examDate)})
        this.$set(this.activities, 1, {content: this.dataSpaceExam[1].examName, timestamp: this.timeFormat(this.dataSpaceExam[1].examDate)})
        this.$set(this.activities, 2, {content: this.dataSpaceExam[2].examName, timestamp: this.timeFormat(this.dataSpaceExam[2].examDate)})
        this.$set(this.activities, 3, {content: this.dataSpaceExam[3].examName, timestamp: this.timeFormat(this.dataSpaceExam[3].examDate)})
        this.$set(this.activities, 4, {content: this.dataSpaceExam[4].examName, timestamp: this.timeFormat(this.dataSpaceExam[4].examDate)})
      })
      console.log(this.dataSpaceExam)
    },
    timeFormat: function (timestamp) {
      var time = new Date(timestamp)
      var y = time.getFullYear()
      var m = time.getMonth() + 1
      var d = time.getDate()
      return y + '-' + m + '-' + d
    }
  },
  data () {
    return {
      activities: [{
        content: '2017-2018学年第一学期七年级期末考试',
        timestamp: '2017-12-30'
      }, {
        content: '2017-2018学年第一学期七年级期中考试',
        timestamp: '2017-11-30'
      }, {
        content: '2017-2018学年第一学期七年级二次月考',
        timestamp: '2017-10-30'
      }, {
        content: '2017-2018学年第一学期七年级一次月考',
        timestamp: '2017-10-30'
      }, {
        content: '2017-2018学年第一学期七年级一次月考',
        timestamp: '2017-10-30'
      }],
      // 成绩信息
      gradeInformation: [{
        coversionTotal: '',
        schoolIndex: '',
        classIndex: ''
      }],
      // 学生个人信息
      studentInformation: [{
        studentName: '',
        studentNumber: '',
        id: '',
        gradeName: '',
        className: ''
      }],
      // 考试信息
      examInformation: [],
      // 个人信息数据暂存表
      dataSpace: [],
      // 成绩数据暂存表
      dataSpaceGrade: [],
      // 成绩信息暂存表
      dataSpaceExam: []
    }
  }
}
</script>

<style scoped>
  .informationclass{
    display: flex;
    text-align: center;
    justify-content:center;
    align-items: center;
  }
  .informationtitle{
    font-size: 20px;
    font-weight: bold;
  }
  .informationcontent{
    color: ghostwhite;
  }
  .box-card-father{
    width: 83%;
    height: 200px;
    float:left;
    margin:20px auto;
  }
  .box-card-son{
    float: left;
    width: 15%;
    height: 100px;
    background-color:rgba(76, 191, 65, 0.84);
    text-align: center;
    margin-left: 7%;
    margin-top: 2%;
    border-radius:10px
  }
  .clearfix{
    width: 100%;
    height: 100%;
  }
  .box-card{
  }
  .studentself{
  }
  .timelinecontainer{
    display:inline;
  }
  .exam{
    display:inline;
    float: left;
    width: 300px;
  }
  .report{
    float: right;
    display:inline;
  }
  .timestamp{
    display: inline;
  }
</style>
