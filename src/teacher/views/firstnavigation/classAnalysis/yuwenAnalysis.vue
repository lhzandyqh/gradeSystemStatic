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
              <yuwen-analysis-table></yuwen-analysis-table>
            </div>
            <div style="padding-top: 40px">
              <ten-score-statis-chart></ten-score-statis-chart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="重点关注" name="second">
            <div>
              <important-focus-on-table></important-focus-on-table>
            </div>
            <div style="padding-top: 40px">
              <front-many-rank-chart></front-many-rank-chart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="班校对比" name="third">
            <div>
              <class-six-rate-analysis-table></class-six-rate-analysis-table>
            </div>
            <div style="margin-top: 20px">
              <subject-class-to-school-chart></subject-class-to-school-chart>
            </div>
          </el-tab-pane>
          <el-tab-pane label="等级分布" name="fourth">
            <div>
              <student-rank-distribute-chart></student-rank-distribute-chart>
            </div>
            <div style="margin-top: 30px">
              <class-rank-table></class-rank-table>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历次对比" name="fourth1">定时任务补偿</el-tab-pane>
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
export default {
  name: 'yuwenAnalysis',
  components: {yuwenAnalysisTable, tenScoreStatisChart, importantFocusOnTable, frontManyRankChart, classSixRateAnalysisTable, subjectClassToSchoolChart, studentRankDistributeChart, classRankTable},
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

</style>
