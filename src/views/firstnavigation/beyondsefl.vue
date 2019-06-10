<template>
  <div class="container">
<!--    <h1>这是超越自我模块</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─理想成绩─</span><br><br>
      <span style="text-align: center;font-size: 14px">曾经有珍贵的5分放在我面前我没有珍惜，如果再给我一次机会，我会说“不要再马虎了</span>
    </el-row>
<!--    <el-row>-->
<!--      <div class="picturecontainer">-->
<!--        <img v-bind:src="imgUrl" width="80%">-->
<!--      </div>-->
<!--    </el-row>-->
    <el-row>
      <beyond-self-table :subjectTableData="subjectTableData"></beyond-self-table>
    </el-row>
  </div>
</template>

<script>
import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\beyondself.png'
import beyondSelfTable from '@/components/tables/beyondSelfTable'
import {getSubjectGradeTable} from '@/api/studentGetData'
export default {
  name: 'beyondsefl',
  components: {beyondSelfTable},
  mounted () {
    this.getSubjectData()
  },
  data () {
    return {
      imgUrl: imgUrl,
      subjectTableData: []
    }
  },
  methods: {
    getSubjectData: function () {
      const prams = {
        userID: 1
      }
      getSubjectGradeTable(prams).then(response => {
        this.subjectTableData = response.data.info
      })
    }
  }
}
</script>

<style scoped>

</style>
