<template>
  <div class="appconatainer">
    <el-row>
      <span style="float: left;">导出语文试卷分析报告</span><br>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          prop="questionnum"
          label="题号"
          width="60">
        </el-table-column>
        <el-table-column
          prop="fullscore"
          label="满分"
          width="60">
        </el-table-column>
        <el-table-column
          prop="difficulty"
          label="难度"
          width="60">
        </el-table-column>
        <el-table-column
          prop="dividing"
          label="区分度"
          width="65">
        </el-table-column>
        <el-table-column
          prop="classaverage"
          label="班均分"
          width="65">
        </el-table-column>
        <el-table-column
          prop="schoolaverage"
          label="校均分"
          width="65">
        </el-table-column>
        <el-table-column
          prop="knowledgepoint"
          label="知识点"
          width="65">
        </el-table-column>
        <el-table-column
          prop="testability"
          label="考察能力"
          width="80">
        </el-table-column>
        <el-table-column
          prop="analysis"
          label="解析">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'examPaperAnalysis',
  data () {
    return {
      tableData: [{
        questionnum: '1',
        fullscore: '5',
        difficulty: '0.4',
        dividing: '0.5',
        classaverage: '3.5',
        schoolaverage: '3',
        knowledgepoint: '',
        testability: '',
        analysis: ''
      }, {
        questionnum: '2',
        fullscore: '5',
        difficulty: '0.4',
        dividing: '0.5',
        classaverage: '3.5',
        schoolaverage: '3',
        knowledgepoint: '',
        testability: '',
        analysis: ''
      }, {
        questionnum: '3',
        fullscore: '5',
        difficulty: '0.4',
        dividing: '0.5',
        classaverage: '3.5',
        schoolaverage: '3',
        knowledgepoint: '',
        testability: '',
        analysis: ''
      }, {
        questionnum: '4',
        fullscore: '5',
        difficulty: '0.4',
        dividing: '0.5',
        classaverage: '3.5',
        schoolaverage: '3',
        knowledgepoint: '',
        testability: '',
        analysis: ''
      }, {
        questionnum: '5',
        fullscore: '5',
        difficulty: '0.4',
        dividing: '0.5',
        classaverage: '3.5',
        schoolaverage: '3',
        knowledgepoint: '',
        testability: '',
        analysis: ''
      }]
    }
  }
}
</script>

<style scoped>

</style>
