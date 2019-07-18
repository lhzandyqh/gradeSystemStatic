<template>
  <div class="app-container">
    <el-row>
      <div class="selectContainer">
        <div class="shuoming">
          <span style="font-weight: bolder">请选择班级</span>
        </div>
        <div class="select">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
    </el-row>
    <el-row>
      <div class="mainContent">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="成绩单" name="first">
            <div>
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─化学单科成绩─</span>
              </div>
              <!--              <yuwen-analysis-table></yuwen-analysis-table>-->
              <div style="margin-top: 20px;margin-left: 5%">
                <single-subject-grade-table></single-subject-grade-table>
              </div>
            </div>
            <!--            <div style="padding-top: 40px">-->
            <!--              <div class="title">-->
            <!--                <span style="font-weight: bold;color: #19c237">─10分一档统计表─</span>-->
            <!--              </div>-->
            <!--              <ten-score-statis-chart></ten-score-statis-chart>-->
            <!--            </div>-->
          </el-tab-pane>
          <el-tab-pane label="重点关注" name="second">
            <div>
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─重点关注─</span>
              </div>
              <important-focus-on-table></important-focus-on-table>
            </div>
            <div style="padding-top: 40px">
              <div class="title">
                <div> <span style="font-weight: bold;color: #19c237">─单科前N名分布─</span></div>
                <div style="padding-top: 20px"><span style="font-size: 15px;font-weight: bolder;">班级： 共70 人   全校： 共500人</span></div>
              </div>
              <front-many-rank-chart></front-many-rank-chart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="科校对比" name="third">
            <div>
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─科目六率分析─</span>
              </div>
              <class-six-rate-analysis-table></class-six-rate-analysis-table>
            </div>
            <div style="margin-top: 20px">
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─单科六率班校对比图─</span>
              </div>
              <subject-class-to-school-chart></subject-class-to-school-chart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="等级分布" name="fourth">
            <div>
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─科目等级分布图─</span>
              </div>
              <student-rank-distribute-chart></student-rank-distribute-chart>
            </div>
            <div style="margin-top: 30px">
              <class-rank-table></class-rank-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历次对比" name="fourth1">
            <div>
              <div class="examName">
                <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
              </div>
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─学期内历次成绩均分表─</span>
              </div>
              <class-successive-grade-con-table></class-successive-grade-con-table>
            </div>
            <div style="margin-top: 30px">
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─学期内历次总成绩变化趋势图─</span>
              </div>
              <total-grade-change-trend></total-grade-change-trend>
            </div>
            <div style="margin-top: 20px">
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─学期内历次成绩班级六率表─</span>
              </div>
            </div>
            <div style="padding-top: 10px">
              <in-session-class-six-rate-chart></in-session-class-six-rate-chart>
            </div>
            <div style="margin-top: 20px">
              <div class="title">
                <span style="font-weight: bold;color: #19c237">─学期内历次成绩班级六率对比表─</span>
              </div>
            </div>
            <div style="padding-top: 10px;margin-left: -20%">
              <in-class-six-ratecomparison></in-class-six-ratecomparison>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-row>
  </div>
</template>

<script>
import yuwenAnalysisTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/yuwenAnalysisTable'
import tenScoreStatisChart from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/tenScoreStatisChart'
import importantFocusOnTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/importantFocusOnTable'
import frontManyRankChart from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/frontManyRankChart'
import classSixRateAnalysisTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/classSixRateAnalysisTable'
import subjectClassToSchoolChart from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/subjectClassToSchoolChart'
import studentRankDistributeChart from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/studentRankDistributeChart'
import classRankTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/classRankTable'
import singleSubjectGradeTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/singleSubjectGradeTable'
import classSuccessiveGradeConTable from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/classSuccessiveGradeConTable'
import totalGradeChangeTrend from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/totalGradeChangeTrend'
import inSessionClassSixRateChart from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/table/inSessionClassSixRateChart'
import inClassSixRatecomparison from '@/views/firstnavigation/classAnalysis/classAnalysisConponent/chart/inClassSixRatecomparison'

export default {
  name: 'yuwenAnalysis',
  components: {yuwenAnalysisTable, inClassSixRatecomparison, singleSubjectGradeTable, inSessionClassSixRateChart, tenScoreStatisChart, totalGradeChangeTrend, importantFocusOnTable, frontManyRankChart, classSixRateAnalysisTable, subjectClassToSchoolChart, studentRankDistributeChart, classRankTable, classSuccessiveGradeConTable},
  data () {
    return {
      activeName: 'first',
      options: [{
        value: '选项1',
        label: '一班'
      }, {
        value: '选项2',
        label: '二班'
      }, {
        value: '选项3',
        label: '三班'
      }, {
        value: '选项4',
        label: '四班'
      }, {
        value: '选项5',
        label: '五班'
      }],
      value: ''
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .selectContainer{
    float: right;
  }
  .shuoming{
    float: left;
    padding-top: 10px;
  }
  .select{
    float: right;
    padding-left: 10px;
  }
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .tableContent{
    margin:0px auto;
  }

</style>
