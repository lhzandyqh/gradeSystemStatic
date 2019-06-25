<template>
  <div class="container">
    <el-row>
        <el-table
          :data="subjectTableData"
          border
          style="width: 80%;align-content: center">
          <el-table-column
            prop="subjectName"
            label="学科"
            width="100">
          </el-table-column>
          <el-table-column
            prop="score"
            label="分数"
            width="100">
          </el-table-column>
          <el-table-column
            prop="classIndex"
            label="班级排名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="classArg"
            label="班级平均分"
            width="100">
          </el-table-column>
          <el-table-column
            prop="schoolIndex"
            label="学校排名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="schoolArg"
            label="学校平均分">
          </el-table-column>
        </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'allClassOverviewTable',
  props: {
    subjectTableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      tableData: [{
        subject: '总成绩',
        score: '720',
        classrank: '2',
        classaverage: '600',
        schoolrank: '24',
        schoolaverage: '500'
      }, {
        subject: '三科总分',
        score: '265',
        classrank: '2',
        classaverage: '200',
        schoolrank: '30',
        schoolaverage: '198'
      }, {
        subject: '语文',
        score: '120',
        classrank: '4',
        classaverage: '80',
        schoolrank: '20',
        schoolaverage: '60 '
      }, {
        subject: '数学',
        score: '130',
        classrank: '5',
        classaverage: '80',
        schoolrank: '19',
        schoolaverage: '70'
      }, {
        subject: '英语',
        score: '110',
        classrank: '4',
        classaverage: '60',
        schoolrank: '4',
        schoolaverage: '70'
      }, {
        subject: '物理',
        score: '100',
        classrank: '2',
        classaverage: '70',
        schoolrank: '5',
        schoolaverage: '65'
      }, {
        subject: '化学',
        score: '100',
        classrank: '6',
        classaverage: '87',
        schoolrank: '9',
        schoolaverage: '65'
      }, {
        subject: '生物',
        score: '76',
        classrank: '13',
        classaverage: '76',
        schoolrank: '46',
        schoolaverage: '74'
      }, {
        subject: '历史',
        score: '86',
        classrank: '54',
        classaverage: '65',
        schoolrank: '56',
        schoolaverage: '50'
      }, {
        subject: '地理',
        score: '74',
        classrank: '13',
        classaverage: '80',
        schoolrank: '25',
        schoolaverage: '65'
      }, {
        subject: '政治',
        score: '65',
        classrank: '36',
        classaverage: '85',
        schoolrank: '9',
        schoolaverage: '74'
      }]
    }
  }
}
</script>

<style scoped>
  .output{
   float: left;
  }

</style>
