<template xmlns:el-col="http://www.w3.org/1999/html">
  <div class="app-container">
<!--    <h1>这是用户反馈组件</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试考试总结</h4>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="buttonContainer">
<!--        <el-button type="success"  icon="el-icon-notebook-1" plain>查看我的总结</el-button>-->
        <student-summary-book></student-summary-book>
      </div>
    </el-row>
    <el-row :gutter="5" style="padding-top: 30px">
      <el-col :span="6">
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;text-align: left">本次考试发挥良好的科目</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-checkbox-group v-model="goodSubjectList">
          <el-checkbox label="语文"></el-checkbox>
          <el-checkbox label="数学"></el-checkbox>
          <el-checkbox label="英语"></el-checkbox>
          <el-checkbox label="物理"></el-checkbox>
          <el-checkbox label="化学"></el-checkbox>
          <el-checkbox label="生物"></el-checkbox>
          <el-checkbox label="政治" disabled></el-checkbox>
          <el-checkbox label="历史" disabled></el-checkbox>
          <el-checkbox label="生物" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="5" style="padding-top: 30px">
      <el-col :span="6">
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;">本次考试发挥欠佳的科目</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-checkbox-group v-model="badSubjectList">
          <el-checkbox label="语文"></el-checkbox>
          <el-checkbox label="数学"></el-checkbox>
          <el-checkbox label="英语"></el-checkbox>
          <el-checkbox label="物理"></el-checkbox>
          <el-checkbox label="化学"></el-checkbox>
          <el-checkbox label="生物"></el-checkbox>
          <el-checkbox label="政治" disabled></el-checkbox>
          <el-checkbox label="历史" disabled></el-checkbox>
          <el-checkbox label="生物" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="5" style="padding-top: 30px">
      <el-col :span="6">
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;">本次考试成绩提升较大的科目</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-checkbox-group v-model="Enhance">
          <el-checkbox label="语文"></el-checkbox>
          <el-checkbox label="数学"></el-checkbox>
          <el-checkbox label="英语"></el-checkbox>
          <el-checkbox label="物理"></el-checkbox>
          <el-checkbox label="化学"></el-checkbox>
          <el-checkbox label="生物"></el-checkbox>
          <el-checkbox label="政治" disabled></el-checkbox>
          <el-checkbox label="历史" disabled></el-checkbox>
          <el-checkbox label="生物" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="5" style="padding-top: 30px">
      <el-col :span="6">
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;">下次考试成绩有待提高的科目</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-checkbox-group v-model="nextEnhance">
          <el-checkbox label="语文"></el-checkbox>
          <el-checkbox label="数学"></el-checkbox>
          <el-checkbox label="英语"></el-checkbox>
          <el-checkbox label="物理"></el-checkbox>
          <el-checkbox label="化学"></el-checkbox>
          <el-checkbox label="生物"></el-checkbox>
          <el-checkbox label="政治" disabled></el-checkbox>
          <el-checkbox label="历史" disabled></el-checkbox>
          <el-checkbox label="生物" disabled></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row :gutter="5" style="padding-top: 30px">
      <el-col :span="6">
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;">本次考试存在的问题</span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-checkbox-group v-model="nextEnhance">
          <el-checkbox label="粗心大意"></el-checkbox>
          <el-checkbox label="基础知识掌握不牢固"></el-checkbox>
          <el-checkbox label="考试时间规划不好"></el-checkbox>
          <el-checkbox label="心态紧张急躁"></el-checkbox>
          <el-checkbox label="其他"></el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row style="padding-top: 30px">
      <el-row>
        <div class="title">
          <span style="color: #19c237;font-weight: bolder;font-size: 15px;">心得体会</span>
        </div>
      </el-row>
      <el-row>
        <div class="inputContainer">
          <el-input
            type="textarea"
            maxlength="400"
            placeholder="请输入内容"
            show-word-limit
            v-model="textarea">
          </el-input>
        </div>
      </el-row>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="submitButton">

        <el-button type="primary"  icon="el-icon-finished" plain>提交总结</el-button>

        <el-button type="primary"  icon="el-icon-finished" @click="notice" plain>提交总结</el-button>

      </div>
    </el-row>
  </div>
</template>

<script>
import studentSummaryBook from '~/components/dialog/studentSummaryBook'
export default {
  name: 'userfeedback',
  components: {studentSummaryBook},

  methods: {
    notice: function () {
      this.$message({
        message: '功能尚未开通',
        type: 'warning'
      })
    }
  },

  data () {
    return {
      goodSubjectList: [],
      badSubjectList: [],
      Enhance: [],
      nextEnhance: [],
      textarea: ''
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
    border-radius:10px;
    height: 600px;

  }
  .title{
    text-align: left;
    padding-left: 40px;
  }
  .inputContainer{
    width: 60%;
    padding-left: 25%;
  }
  .buttonContainer{
    float: right;
    padding-right: 50px;
  }

</style>
