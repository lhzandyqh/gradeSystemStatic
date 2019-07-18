<template>
  <div class="app-container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="化学科目六率对比" name="first">
        <div>
          <div class="examName">
            <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
          </div>
          <div class="title">
            <span style="font-weight: bold;color: #19c237">─化学科目六率对比表─</span>
          </div>
          <!--              <yuwen-analysis-table></yuwen-analysis-table>-->
          <div class="rankContainer">
            <div>
              <el-button type="success" plain>按照优秀率排序</el-button>
            </div>
          </div>
          <div style="margin-top: 20px;margin-left: 5%">
            <subject-six-rates-comparison></subject-six-rates-comparison>
          </div>
          <div class="title">
            <span style="font-weight: bold;color: #19c237;margin-top: 40px">─化学单科六率对比图─</span>
          </div>
          <div>
            <subject-six-rates-comparison-chart></subject-six-rates-comparison-chart>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="化学科目前N名分布对比" name="second">
        <div>
          <div class="examName">
            <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
          </div>
          <div class="title">
            <span style="font-weight: bold;color: #19c237">─化学单科前N名上线分布表─</span>
          </div>
          <el-row>
            <div class="rankContainer">
              <div>
                <el-button type="success" plain>按照前100名排序</el-button>
              </div>
            </div>
          </el-row>
          <div style="padding-left: 5%">
            <single-subject-front-n-table></single-subject-front-n-table>
          </div>
          <div class="title">
            <span style="font-weight: bold;color: #19c237">─化学单科前N名上线分布图─</span>
          </div>
          <el-row>
            <single-subject-front-n-chart></single-subject-front-n-chart>
          </el-row>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import subjectSixRatesComparisonChart from '@/views/firstnavigation/classComparison/classComparisonConponent/chart/subjectSixRatesComparisonChart'
import subjectSixRatesComparison from '@/views/firstnavigation/classComparison/classComparisonConponent/table/subjectSixRatesComparison'
import singleSubjectFrontNTable from '@/views/firstnavigation/classComparison/classComparisonConponent/table/singleSubjectFrontNTable'
import singleSubjectFrontNChart from '@/views/firstnavigation/classComparison/classComparisonConponent/chart/singleSubjectFrontNChart'
export default {
  name: 'huaxueComparison',
  components: {subjectSixRatesComparison, subjectSixRatesComparisonChart, singleSubjectFrontNTable, singleSubjectFrontNChart},
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>
  .app-container{
    margin-left: 0%;
  }
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .rankContainer{
    float: left;
    padding-left: 65px;
    padding-bottom: 30px;
  }

</style>
