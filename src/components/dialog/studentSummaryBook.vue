<template>
  <div class="app_container">
    <el-button type="success"  icon="el-icon-notebook-1"   @click="outerVisible = true" plain>查看我的总结</el-button>
    <el-dialog title="我的总结" :visible.sync="outerVisible">
      <el-dialog
        width="60%"
        title="总结详情"
        :visible.sync="innerVisible"
        append-to-body>
        <h2>{{this.index}}</h2>
        <h2>{{this.content}}</h2>
      </el-dialog>
      <div class="zonjie">
        <el-table
          :data="tableData"
          height="250"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="总结日期"
            align="center"
            width="140">
          </el-table-column>
          <el-table-column
            prop="title"
            label="总结标题"
            align="center"
            width="400">
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="readSummary(scope.$index, scope.row)">查看总结</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible = false">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'studentSummaryBook',
  methods: {
    readSummary: function (index, content) {
      this.index = index
      this.content = content
      this.innerVisible = true
    }
  },
  data () {
    return {
      outerVisible: false,
      innerVisible: false,
      index: '',
      content: '',
      tableData: [{
        date: '2016-11-02',
        title: '2016-2017学年第二学期七年级十一月月考考试总结'
      }, {
        date: '2016-10-04',
        title: '2016-2017学年第二学期七年级十月月考考试总结'
      }, {
        date: '2016-09-04',
        title: '2016-2017学年第二学期七年级九月月考考试总结'
      }, {
        date: '2016-06-04',
        title: '2016-2017学年第一学期七年级期末考试考试总结'
      }, {
        date: '2016-05-04',
        title: '2016-2017学年第一学期七年级五月月考考试总结'
      }, {
        date: '2016-04-04',
        title: '2016-2017学年第一学期七年级四月月考考试总结'
      }, {
        date: '2016-03-04',
        title: '2016-2017学年第一学期七年级期中考试总结'
      }, {
        date: '2016-02-04',
        title: '2016-2017学年第一学期七年级二月月考考试总结'
      }, {
        date: '2016-01-04',
        title: '2016-2017学年第一学期七年级一月月考考试总结'
      }]
    }
  }
}
</script>

<style scoped>
  .zonjie{
    text-align: center;
  }
</style>
