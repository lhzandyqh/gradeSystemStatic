<template>
  <el-table
    :data="subjectTableData"
    height="400"
    stripe
    style="width: 1000px">
    <el-table-column
      prop="subjectName"
      align="center"
      label="学科"
      width="80">
    </el-table-column>
    <el-table-column
      prop="score"
      align="center"
      label="原分数"
      width="80">
    </el-table-column>
    <el-table-column
      prop="date"
      align="center"
      width="80">
      <img v-bind:src="imgUrl" width="50%">
    </el-table-column>
    <el-table-column
      prop="name"
      align="center"
      label="理想分数"
      width="100">
      <template slot-scope="scope">
        <el-input v-model="input[scope.$index]"></el-input>
      </template>
    </el-table-column>
    <el-table-column
      prop="classIndex"
      align="center"
      label="原班级排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="newclassrank"
      align="center"
      label="新班级排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="schoolIndex"
      align="center"
      label="原学校排名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="newschoolrank"
      align="center"
      label="新学校排名"
      width="120">
    </el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="inquireNewRank(scope.$index, scope.row)">查询</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
// import {getNewGradeRank} from '~/api/studentGetData'
export default {
  name: 'beyondSelfTable',
  props: {
    subjectTableData: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      imgUrl: require('../../../../static/images/jiantou.png'),
      input: ['', '', '', '', '', '', '', '', ''],
      newRank: ['', '']
    }
  },
  methods: {
    inquireNewRank: function (index, content) {
      this.$emit('updateprop', this.input[index])
      console.log(this.input[index])
      console.log(content.subjectName)
      // const prams = {
      //   userID: 1,
      //   subjectName: content.subjectName,
      //   subjectAimsScore: this.input[index],
      // }
    }
  }
}
</script>

<style scoped>

</style>
