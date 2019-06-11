<template>
  <div class="app-container">
<!--    <h1>这是试卷分析组件</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="twoButton">
        <div class="buttonContainer">
          <student-exam-analyze></student-exam-analyze>
        </div>
        <div class="buttonContainer">
          <el-button type="success"   icon="el-icon-edit" plain>已保存分析</el-button>
        </div>
      </div>
    </el-row>
    <el-row style="padding-top: 20px">
      <span style="font-weight: bold;color: #19c237">─填写试卷分析─</span>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-card class="box-card">
        <el-row>
          <el-col :span="2" :offset="1">
            <div class="titlesubject">
              <span style="font-weight: bolder">选择科目</span>
            </div>
          </el-col>
          <el-col :span="18">
            <div class="radiocontainer">
              <el-radio-group v-model="radio">
                <el-radio :label="1">语文</el-radio>
                <el-radio :label="2">数学</el-radio>
                <el-radio :label="3">英语</el-radio>
                <el-radio :label="4">物理</el-radio>
                <el-radio :label="5">化学</el-radio>
                <el-radio :label="6">政治</el-radio>
                <el-radio :label="7">历史</el-radio>
                <el-radio :label="8">地理</el-radio>
                <el-radio :label="9">政治</el-radio>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="2" :offset="1">
            <div class="title">
              <span style="font-weight: bolder">题号</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-input v-model="problemNum" placeholder="请输入题号"></el-input>
          </el-col>
          <el-col :span="2" :offset="1">
            <div class="title">
              <span style="font-weight: bolder">题型</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2" :offset="1">
            <div class="title">
              <span style="font-weight: bolder">满分</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-input v-model="full" placeholder="请输入分值"></el-input>
          </el-col>
          <el-col :span="2" :offset="1">
            <div class="title">
              <span style="font-weight: bolder">我的得分</span>
            </div>
          </el-col>
          <el-col :span="3">
            <el-input v-model="myScore" placeholder="请输入我的得分"></el-input>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="3" :offset="1">
            <div class="titlepoint">
              <span style="font-weight: bolder">本题考查知识点</span>
            </div>
          </el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textareaPoint">
            </el-input>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <el-col :span="3" :offset="1">
            <div class="titlepoint">
              <span style="font-weight: bolder">反思与理解</span>
            </div>
          </el-col>
          <el-col :span="20">
            <el-input
              type="textarea"
              :rows="4"
              placeholder="请输入内容"
              v-model="textareaUnderstand">
            </el-input>
          </el-col>
        </el-row>
        <el-row style="padding-top: 20px">
          <div class="save">
            <el-button type="primary"  icon="el-icon-finished" plain>保存</el-button>
          </div>
        </el-row>
      </el-card>
    </el-row>
  </div>
</template>

<script>
import examPaperAnalysis from '~/components/tables/examPaperAnalysis'
import studentExamAnalyze from '~/components/dialog/studentExamAnalyze'
export default {
  name: 'paperanalysis',
  components: {examPaperAnalysis, studentExamAnalyze},
  data () {
    return {
      radio: 1,
      problemNum: '',
      options: [{
        value: '选项1',
        label: '选择题'
      }, {
        value: '选项2',
        label: '填空题'
      }, {
        value: '选项3',
        label: '判断题'
      }, {
        value: '选项4',
        label: '简答题'
      }, {
        value: '选项5',
        label: '计算题'
      }],
      value: '',
      full: '',
      myScore: '',
      textareaPoint: '',
      textareaUnderstand: ''
    }
  }
}
</script>

<style scoped>
  .app-container{
    width: 92%;
    padding-bottom:40px;
    background-color: #ffffff;
    margin-left: 4%;
    border-radius:10px;
  }
  .tableContainer{
    padding-right: 20%;
  }
  .box-card{
    width: 80%;
    margin-left: 10%;
  }
  .buttonContainer{
    padding-right: 30px;
    float: right;
    display: inline;
  }
  .twoButton{
    display: inline;
  }
  .title{
    padding-top: 8px;
  }
  .titlesubject{
    padding-top: 2px;
  }
  .titlepoint{
    padding-top: 15px;
  }
</style>
