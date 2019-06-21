<template>
  <div class="app-container">
    <el-button type="success"  icon="el-icon-notebook-1"   @click="outerVisible = true" plain>查看分析报告</el-button>
    <el-dialog title="超越率分析报告" :visible.sync="outerVisible">
      <div class="title-container">
        <span style="font-weight: bolder">超越率数据</span>
      </div>
      <div class="table-container">
        <el-table
          height="250"
          :data="tableData"
          border
          stripe
          style="width: 82%;text-align: center">
          <el-table-column
            align="center"
            prop="subject"
            label="科目"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="radiodiv"
            label="超越因子"
            width="200">
          </el-table-column>
          <el-table-column
            align="center"
            prop="index"
            label="排名">
          </el-table-column>
        </el-table>
      </div>
      <div class="title-container">
        <div class="title">
          <span style="font-weight: bolder">分析结论</span>
        </div>
        <div class="content">
          <span>本次考试拉高总分的科目为{{this.resultData[0]}}</span><br>
        </div>
<!--        <span>{{this.resultData[0]}}</span>-->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {beyondRateCompare} from '~/api/studentGetData'
export default {
  name: 'weakSpotDetails',
  mounted () {
    this.getBeyondRateData()
  },
  methods: {
    getBeyondRateData: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      beyondRateCompare(prams).then(response => {
        console.log('检查输出的数据')
        console.log(response.data.info)
        this.tableData = response.data.info
        var i = 0
        while (i < this.tableData.length) {
          if (this.tableData[i].index === 1) {
            console.log('开始循环')
            // this.resultData[0] = this.table[i].subject
            // console.log(this.resultData)
            this.$set(this.resultData, 0, this.tableData[i].subject)
          }
          i = i + 1
        }
        console.log(this.resultData)
      })
    }
  },
  data () {
    return {
      tableData: [],
      resultData: ['', ''],
      outerVisible: false
    }
  }
}
</script>

<style scoped>
  .table-container{
    margin-left: 20%;
  }
  .title-container{
    text-align: left;
    padding-left: 10%;
  }
  .content{
    margin-top: 30px;
  }

</style>
