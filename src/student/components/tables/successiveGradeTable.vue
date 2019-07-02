<template>
  <div class="container">
    <el-row>
      <el-table
        :data="successiveData"
        border
        style="width: 75%">
        <el-table-column
          prop="number"
          align="center"
          label="序号"
          width="100">
          <template slot-scope="scope">
<!--            // 自动生成序号-->
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column
          prop="examName"
          align="center"
          label="名称"
          width="240">
        </el-table-column>
        <el-table-column
          prop="sumtotal"
          align="center"
          label="满分值"
          width="80">
        </el-table-column>
        <el-table-column
          prop="coversionTotal"
          align="center"
          label="我的得分"
          width="80">
        </el-table-column>
        <el-table-column
          prop="classIndex"
          align="center"
          label="班级排名"
          width="80">
        </el-table-column>
        <el-table-column
          prop="studentschoolIndex"
          align="center"
          label="本校排名">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'successiveGradeTable',
  props: {
    successiveData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      // tableData: this.successiveData[0]
    }
  }
}
</script>

<style scoped>

</style>
