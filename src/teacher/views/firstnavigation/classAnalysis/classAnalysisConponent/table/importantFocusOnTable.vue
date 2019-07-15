<template>
  <div class="app-container">
    <div class="examName">
      <span style="font-size: 20px;font-weight: bolder">2017-2018学年第一学期七年级期中考试</span>
    </div>
    <div class="title">
      <span style="font-weight: bold;color: #19c237">─重点关注─</span>
    </div>
    <div class="tableContent">
      <el-row :gutter="5">
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%">
            <el-table-column  align="center" label="前5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="87">
              </el-table-column>
              <el-table-column
                prop="score"
                label="分数"
                align="center"
                width="87">
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%">
            <el-table-column  align="center" label="后5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="score"
                label="分数"
                align="center"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%">
            <el-table-column  align="center" label="进步最大前5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="score"
                label="进步名次"
                align="center"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6">
          <el-table
            :data="tableData"
            style="width: 73%">
            <el-table-column  align="center" label="退步最大前5名">
              <el-table-column
                prop="name"
                label="姓名"
                align="center"
                width="120">
              </el-table-column>
              <el-table-column
                prop="score"
                label="退步名次"
                align="center"
                width="120">
              </el-table-column>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'importantFocusOnTable',
  data () {
    return {
      tableData: [{
        name: '柯璐雅',
        score: 666
      }, {
        name: '李宗广',
        score: 665
      }, {
        name: '高子妍',
        score: 664
      }, {
        name: '刘静怡',
        score: 663
      }, {
        name: '齐俊超',
        score: 662
      }]
    }
  }
}
</script>

<style scoped>
  .examName{
    padding-top: 20px;
  }
  .title{
    padding-top: 20px;
  }
  .tableContent{
    margin:0px auto;
    padding-top: 20px;
  }

</style>
