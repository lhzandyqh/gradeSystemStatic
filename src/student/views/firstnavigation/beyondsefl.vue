<template>
  <div class="container">
    <!--    <h1>这是超越自我模块</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─理想成绩─</span><br><br>
      <span style="text-align: center;font-size: 14px;font-weight: bolder">总结失误，提升准确率，提高考试成绩！</span><br>
    </el-row>
    <!--    <el-row>-->
    <!--      <div class="picturecontainer">-->
    <!--        <img v-bind:src="imgUrl" width="80%">-->
    <!--      </div>-->
    <!--    </el-row>-->
    <el-row>
      <beyond-self-table :subjectTableData="subjectTableData" v-on:updateprop = 'zidingyi($event)'></beyond-self-table>
    </el-row>
  </div>
</template>

<script>
import beyondSelfTable from '~/components/tables/beyondSelfTable'
import {getSubjectGradeTable} from '~/api/studentGetData'
export default {
  name: 'beyondsefl',
  components: {beyondSelfTable},
  mounted () {
    this.getSubjectData()
  },
  data () {
    return {
      imgUrl: require('../../../../static/images/beyondself.png'),
      subjectTableData: []
    }
  },
  methods: {
    getSubjectData: function () {
      const prams = {
        userID: window.localStorage.getItem('id')
      }
      getSubjectGradeTable(prams).then(response => {
        this.subjectTableData = response.data.info
      })
    },
    zidingyi: function (newData) {
      this.subjectTableData = newData
    }
  }
}
</script>

<style scoped>

</style>
