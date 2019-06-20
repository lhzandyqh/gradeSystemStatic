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
      prop="aimsClassIndex"
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
      prop="aimsSchoolIndex"
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
import {getNewGradeRank} from '~/api/studentGetData'
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
      input: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      newData: [],
      imgUrl: require('../../../../static/images/jiantou.png'),
      newRank: ['', '']
    }
  },
  methods: {
    inquireNewRank: function (index, content) {
      const prams = {
        userID: 1,
        yuwen: this.input[1],
        shuxue: this.input[2],
        yingyu: this.input[3],
        wuli: this.input[4],
        huaxue: this.input[5],
        shenguw: this.input[6],
        dili: this.input[7],
        lishi: this.input[8],
        zhengzhi: this.input[9]
      }
      // console.log('调用之前')
      // console.log(this.newData)
      getNewGradeRank(prams).then(response => {
        this.newData = response.data.info
        console.log('这是传给父组件的新数据')
        console.log(this.newData)
        this.$emit('updateprop', this.newData)
      })
      // this.$emit('updateprop', this.newData)
      // console.log(this.input[index])
      // console.log(content.subjectName)
      // console.log('这是传给父组件的新数据')
      // console.log(this.newData)
    }
  }
}
</script>

<style scoped>

</style>
