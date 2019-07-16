<template>
  <div class="app-container">
    <!-- 首页轮播 -->
    <!-- <div>
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
    </div>-->
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
                    <span>姓名：{{teacherinfo.teacherName}}</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].studentName}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>工号：{{teacherinfo.cardId}} </span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].studentNumber}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>年级：{{teacherinfo.className}}</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].id}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>所属科目：{{teacherinfo.subjectName}}</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].gradeName}}</span>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: left">
                    <span>所带班级：{{teacherinfo.gradeName}}</span>
                  </td>
                  <td>
                    <span style="color: #18a689">{{this.studentInformation[0].className}}</span>
                  </td>
                </tr>
              </table>
            </div>
          </el-card>
        </el-col>
        <el-col span="18">
          <el-table :data="list" border style="width: 80%">
            <el-table-column prop="date" label="班级" align="center"></el-table-column>
            <el-table-column prop="name" label="平均分" align="center"></el-table-column>
            <el-table-column prop="address" label="校平均分" align="center"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <div style="background-color:#fff;padding:40px 0;">
          <p style="font-size:20px;color:#159178;font-weight:600">— 行政1班语文最新成绩信息 —</p>
          <div>
            <el-select v-model="value" placeholder="请选择班级">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="chart-f">
            <achievementInfo :chartData="chartData"></achievementInfo>
            <div class="excellent-name">
              <p class="excellent-tit">高分【90%~100%】学生名单（10人）</p>
              <p class="excellent-i">分数区间【765分-850分】</p>
              <p class="excellent-name-i">姓名：xxx</p>
            </div>
          </div>
          <el-table :data="newestClassList" align="center">
            <el-table-column prop="subject" label="科目" align="center"></el-table-column>
            <el-table-column prop="subject" label="班级" align="center"></el-table-column>
            <el-table-column prop="subject" label="班级人数" align="center"></el-table-column>
            <el-table-column label="高分【90%~100%】" align="center">
              <el-table-column prop="highnum" label="高分人数" align="center"></el-table-column>
              <el-table-column prop="高分率" label="高分率" align="center">
                <template slot-scope="scope">
                  <span>{{ (scope.row.高分率*100).toFixed(2) + '%' }}</span>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="优秀【85%~90%】" align="center">
              <el-table-column prop="excellentstudents" label="优秀人数" align="center"></el-table-column>
              <el-table-column prop="优秀率" label="优秀率" align="center">
                <template slot-scope="scope">
                  <span>{{ (scope.row.优秀率*100).toFixed(2) + '%' }}</span>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="良好【75%~85%】" align="center">
              <el-table-column prop="goodnumbers" label="良好人数" align="center"></el-table-column>
              <el-table-column prop="良好率" label="良好率" align="center">
                <template slot-scope="scope">
                  <span>{{ (scope.row.良好率*100).toFixed(2) + '%' }}</span>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="及格【60%~75%】" align="center">
              <el-table-column prop="passnumbers" label="及格人数" align="center"></el-table-column>
              <el-table-column prop="及格率" label="及格率" align="center">
                <template slot-scope="scope">
                  <span>{{ (scope.row.及格率*100).toFixed(2) + '%' }}</span>
                </template>
              </el-table-column>
            </el-table-column>
            <el-table-column label="低分【0%~60%】" align="center">
              <el-table-column prop="failnum" label="低分人数" align="center"></el-table-column>
              <el-table-column prop="低分率" label="低分率" align="center">
                <template slot-scope="scope">
                  <span>{{ (scope.row.低分率*100).toFixed(2) + '%' }}</span>
                </template>
              </el-table-column>
            </el-table-column>
          </el-table>
        </div>
      </el-row>
      <el-row>
        <p style="font-size:20px;color:#159178;font-weight:600">— 学科均分起势图 —</p>
        <equipartition :chartData="chartData"></equipartition>
      </el-row>
      <el-row>
        <div style="width:600px;margin:0 auto;">
          <p class="examination-tit">考试列表</p>
          <div class="examination" v-for="item in examinationList" :key="item">
            <span>{{item.examName}}</span>
            <img src="../../assets/jpg/index-i.png" />
            <span>{{item.examDate | formatDate}}</span>
            <span class="examination-presentation">
              <img src="../../assets/icon/u84.png" alt /> 查看报告
            </span>
          </div>
        </div>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import { termexamInfo, teacherInfo } from "@/api/studentGetData";
import { formatDate } from "@/utils/common.js"; //时间戳转换
import {
  getUserInformation,
  getUserGrade,
  getExamInformation
} from "@/api/studentGetData";
import achievementInfo from "@/components/charts/achievementInfo";
import equipartition from "@/components/charts/equipartition";
export default {
  name: "firstpage",
  components: {
    achievementInfo,
    equipartition
  },
  data() {
    return {
      chartData: {},
      newestClassList: [],
      list: [
        {
          date: "111"
        }
      ],
      tableData: [],
      options: [
        {
          value: "选项1",
          label: "行政1班"
        },
        {
          value: "选项2",
          label: "行政2班"
        },
        {
          value: "选项3",
          label: "行政3班"
        },
        {
          value: "选项4",
          label: "行政4班"
        },
        {
          value: "选项5",
          label: "行政5班"
        }
      ],

      value: "",
      imgList: [
        {
          url: require("../../assets/jpg/u46.jpg"),
          text: "点击查看上次考试成绩报告"
        },
        {
          url: require("../../assets/jpg/u44.jpg"),
          text: "点击查看最新的考试成绩信息"
        },
        {
          url: require("../../assets/jpg/u48.jpg"),
          text: "点击查看下一次的考试时间和要求"
        }
      ],

      // 成绩信息
      gradeInformation: [
        {
          coversionTotal: "",
          schoolIndex: "",
          classIndex: ""
        }
      ],
      // 学生个人信息
      studentInformation: [
        {
          studentName: "",
          studentNumber: "",
          id: "",
          gradeName: "",
          className: ""
        }
      ],
      // 考试信息
      examInformation: [],
      // 个人信息数据暂存表
      dataSpace: [],
      // 成绩数据暂存表
      dataSpaceGrade: [],
      // 成绩信息暂存表
      dataSpaceExam: [],
      newList: [
        {
          id: "语文",
          name: "行政1班",

          amount1: "59",
          amount2: "69",
          amount3: "79"
        },
        {
          id: "语文",
          name: "行政1班",

          amount1: "59",
          amount2: "69",
          amount3: "79"
        },
        {
          id: "语文",
          name: "行政1班",

          amount1: "59",
          amount2: "69",
          amount3: "79"
        },
        {
          id: "语文",
          name: "行政1班",

          amount1: "59",
          amount2: "69",
          amount3: "79"
        }
      ],
      examinationList: [],
      id:'',// 教师id
      teacherinfo:''// 教师详情
    };
  },
  mounted() {
    this.getExamList();
    this.getTeacherInfo();
  },
  created() {
    this.id = window.localStorage.getItem('id'); // 获取登录页面存的id
    console.log(id,'idididiid')
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex % 2 === 0) {
          return {
            rowspan: 2,
            colspan: 1
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    getExamList() {
      // 获取成绩列表
      termexamInfo().then(res => {
        if (res.data.errno === 200) {
          this.examinationList = res.data.info;
        }
      });
    },
    getTeacherInfo() {
      // 获取教师信息
      let parmas = {
        userID: this.id
      };
      teacherInfo(parmas).then(res => {
        if(res.data.errno===200){
          this.teacherinfo = res.data.info
        }
        console.log(res, 99999999);
      });
    }
  },
  filters: {
    formatDate(time) {
      time = time;
      let date = new Date(time);
      console.log(new Date(time));
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
  }
};
</script>

<style>
/*  修改element-ui样式 */
.el-carousel__button {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
}
.el-carousel__indicators--horizontal {
  margin-bottom: 50px !important;
}
</style>

<style scoped>
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
.chart-f {
  display: flex;
  margin: 20px auto;
  justify-content: space-around;
}
.excellent-name {
  width: 250px;
  height: 220px;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-left: 40px;
}
.excellent-tit {
  color: #159178;
  font-size: 14px;
}
.excellent-i {
  font-size: 14px;
  color: #666;
  margin: 0;
}
.excellent-name-i {
  text-align: left;
}
.examination-tit {
  font-size: 16px;
  color: #159178;
  border-top: 2px solid #159178;
  width: 85px;
  /* background-color: #f0f8fa; */
}
.examination {
  display: flex;
  align-items: center;
  margin: 20px auto;
  text-align: center;
  width: 600px;
}
.examination-presentation {
  font-size: 14px;
  color: #159178;
  margin-left: 100px;
  cursor: pointer;
}
.examination-presentation img {
  vertical-align: middle;
}
</style>
