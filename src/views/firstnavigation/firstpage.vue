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
                <span>484.5</span>
              </div>
            </el-card>
            <el-card class="box-card-son">
              <div class="informationcontent">
                <span>班级占位</span><br>
                <span style="font-size: 20px">20</span><br>
                <span>年级占位:303</span>
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
                <tr><td><a> <span>姓名：</span><span style="color: #19c237">赵寒</span><br></a></td></tr>
                <tr><td><a> <span>学籍号：</span><span style="color: #19c237">08052210</span><br></a></td></tr>
                <tr><td><a> <span>考试号：</span><span style="color: #19c237">51315</span><br></a></td></tr>
                <tr><td><a> <span>年级：</span><span style="color: #19c237">高二</span><br></a></td></tr>
                <tr><td><a> <span>班级：</span><span style="color: #19c237">13班</span><br></a></td></tr>
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
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :icon="activity.icon"
                  :type="activity.type"
                  :color="activity.color"
                  :size="activity.size"
                  :timestamp="activity.timestamp">
                  <div class="examreport">
                    <span style="font-weight: bold">{{activity.content}}</span>  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查看报告</span>
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
export default {
  name: 'firstpage',
  data () {
    return {
      activities: [{
        content: '2017-2018学年第一学期七年级期末考试',
        timestamp: '2017-12-30',
        size: 'large',
        color: '#0bbd87'
      }, {
        content: '2017-2018学年第一学期七年级期中考试',
        timestamp: '2017-11-30',
        size: 'large'
      }, {
        content: '2017-2018学年第一学期七年级二次月考',
        timestamp: '2017-10-30',
        size: 'large'
      }, {
        content: '2017-2018学年第一学期七年级一次月考',
        size: 'large',
        timestamp: '2017-9-30'
      }]
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
</style>
