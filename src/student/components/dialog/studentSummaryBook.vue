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
          :data="sumData"
          height="250"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            label="编号"
            align="center"
            width="140">
            <template slot-scope="scope">
              <!--            // 自动生成序号-->
              {{scope.$index+1}}
            </template>
          </el-table-column>
          <el-table-column
            prop="examName"
            label="考试名称"
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
  props: {
    sumData: {
      type: Array,
      required: true
    }
  },
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
      tableData: []
    }
  }
}
</script>

<style scoped>
  .zonjie{
    text-align: center;
  }
</style>
