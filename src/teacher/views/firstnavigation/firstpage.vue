<template>
  <div class="app-container">
    <!-- 首页轮播 -->
    <div>
      <div class="block card-model">
        <el-carousel trigger="click" >
          <el-carousel-item v-for="item in imgList" :key="item">
            <div style=" position: relative;height:300px">
              <img :src="item.url" alt style="width:100%;height:100%;">
              <div class="card-tips">{{item.text}}</div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <el-row>
      <el-row :gutter="20" style="margin-top:20px">
        <el-col :span="4" :offset="2">
          <el-card class="box-card" style="height: 350px">
            <div slot="header" class="clearfix">
              <span style="color: #18a689;font-weight: bold">教师信息</span>
            </div>
            <div class="studentself">
              <table class="table" style="margin: auto;">
                <tr>
                  <td style="text-align: left">
                    <span>姓名：</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].studentName}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>工号：</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].studentNumber}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>年级：</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].id}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>所属科目：</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].gradeName}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>所带班级：</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].className}}</span>
                  </td>
                </tr>
                <!--                <tr><td><a> <span>姓名：</span><span style="color: #19c237">{{this.studentInformation[0].studentName}}</span></a></td></tr>-->
                <!--                <tr><td><a> <span>学籍号：</span><span style="color: #19c237">{{this.studentInformation[0].studentNumber}}</span></a></td></tr>-->
                <!--                <tr><td><a> <span>考试号：</span><span style="color: #19c237">{{this.studentInformation[0].id}}</span><br></a></td></tr>-->
                <!--                <tr><td><a> <span>年级：</span><span style="color: #19c237">{{this.studentInformation[0].gradeName}}</span><br></a></td></tr>-->
                <!--                <tr><td><a> <span>班级：</span><span style="color: #19c237">{{this.studentInformation[0].className}}</span><br></a></td></tr>-->
              </table>
            </div>
          </el-card>
        </el-col>
        <el-col span="16">
          <el-card class="box-card" style="height: 350px">
            <div slot="header" class="clearfix">
              <span style="color: #18a689;font-weight: bold">考试列表</span>
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
                      <img src="../../assets/icon/u84.png" alt>
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
                      <img src="../../assets/icon/u84.png" alt>
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
                      <img src="../../assets/icon/u84.png" alt>
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
                      <img src="../../assets/icon/u84.png" alt>
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
                      <img src="../../assets/icon/u84.png" alt>
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
import {
  getUserInformation,
  getUserGrade,
  getExamInformation
} from '@/api/studentGetData'
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
        console.log(response, '5555')
        this.dataSpace = response.data.info
        this.$set(this.studentInformation, 0, {
          studentName: this.dataSpace[0].studentName,
          studentNumber: this.dataSpace[0].studentNumber,
          id: this.dataSpace[0].id,
          gradeName: this.dataSpace[0].gradeName,
          className: this.dataSpace[0].className
        })
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
        this.$set(this.gradeInformation, 0, {
          coversionTotal: this.dataSpaceGrade.coversionTotal,
          schoolIndex: this.dataSpaceGrade.schoolIndex,
          classIndex: this.dataSpaceGrade.classIndex
        })
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
        this.$set(this.activities, 0, {
          content: this.dataSpaceExam[0].examName,
          timestamp: this.timeFormat(this.dataSpaceExam[0].examDate)
        })
        this.$set(this.activities, 1, {
          content: this.dataSpaceExam[1].examName,
          timestamp: this.timeFormat(this.dataSpaceExam[1].examDate)
        })
        this.$set(this.activities, 2, {
          content: this.dataSpaceExam[2].examName,
          timestamp: this.timeFormat(this.dataSpaceExam[2].examDate)
        })
        this.$set(this.activities, 3, {
          content: this.dataSpaceExam[3].examName,
          timestamp: this.timeFormat(this.dataSpaceExam[3].examDate)
        })
        this.$set(this.activities, 4, {
          content: this.dataSpaceExam[4].examName,
          timestamp: this.timeFormat(this.dataSpaceExam[4].examDate)
        })
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
      imgList: [
        {
          url: require('../../assets/jpg/u46.jpg'),
          text: '点击查看上次考试成绩报告'
        },
        {
          url: require('../../assets/jpg/u44.jpg'),
          text: '点击查看最新的考试成绩信息'
        },
        {
          url: require('../../assets/jpg/u48.jpg'),
          text: '点击查看下一次的考试时间和要求'
        }
      ],
      activities: [
        {
          content: '2017-2018学年第一学期七年级期末考试',
          timestamp: '2017-12-30'
        },
        {
          content: '2017-2018学年第一学期七年级期中考试',
          timestamp: '2017-11-30'
        },
        {
          content: '2017-2018学年第一学期七年级二次月考',
          timestamp: '2017-10-30'
        },
        {
          content: '2017-2018学年第一学期七年级一次月考',
          timestamp: '2017-10-30'
        },
        {
          content: '2017-2018学年第一学期七年级一次月考',
          timestamp: '2017-10-30'
        }
      ],
      // 成绩信息
      gradeInformation: [
        {
          coversionTotal: '',
          schoolIndex: '',
          classIndex: ''
        }
      ],
      // 学生个人信息
      studentInformation: [
        {
          studentName: '',
          studentNumber: '',
          id: '',
          gradeName: '',
          className: ''
        }
      ],
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

<style>
/*  修改element-ui样式 */
.el-carousel__button{
  width: 10px!important;
  height: 10px!important;
  border-radius: 50%!important;
}
.el-carousel__indicators--horizontal{
  margin-bottom: 50px!important;
}
</style>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.table tr {
  line-height: 40px;
}
.report span {
  color: #18a689;
  cursor: pointer;
}
.informationclass {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.informationtitle {
  font-size: 20px;
  font-weight: bold;
}
.informationcontent {
  color: ghostwhite;
}
.box-card-father {
  width: 83%;
  height: 200px;
  float: left;
  margin: 20px auto;
}
.box-card-son {
  float: left;
  width: 15%;
  height: 100px;
  background-color: rgba(76, 191, 65, 0.84);
  text-align: center;
  margin-left: 7%;
  margin-top: 2%;
  border-radius: 10px;
}
.clearfix {
  width: 100%;
  height: 100%;
}
.box-card {
}
.studentself {
}
.timelinecontainer {
  display: inline;
}
.exam {
  display: inline;
  float: left;
  width: 300px;
}
.report {
  float: right;
  display: inline;
  display: flex;
  align-items: center;
}
.timestamp {
  display: inline;
}
.card-model {
  margin: 0 auto;
  width: 83%;
  height: 300px;
}
.card-tips {
  position: absolute;
  background: #18a689;
  opacity: 0.9;
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff975;
  bottom: 0;
  left: 0;
  z-index: 999;
  cursor: pointer;
}
.card-tips:hover {
  color: #fff;
  opacity: 0.8;
}
</style>
