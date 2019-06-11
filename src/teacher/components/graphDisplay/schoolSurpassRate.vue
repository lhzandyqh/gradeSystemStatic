<template>
  <div class="container">
    <el-row>
      <div class="functionContainer">
        <img v-bind:src="imgUrl" width="5%">
        <span class="span"> 本班</span>
        <span class="span"> - - - - - - - - -</span>
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <span class="span"> - - - - - - - - -</span>
        <span class="span"> 超越</span>
        <span class="span"> {{this.surpassRate.totalClassRate}}%</span>
      </div>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="functionContainer">
        <img v-bind:src="schoolUrl" width="5%">
        <span class="span"> 本校</span>
        <span class="span"> - - - - - - - - -</span>
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <img v-bind:src="peopleUrl" width="5%">
        <span class="span"> - - - - - - - - -</span>
        <span class="span"> 超越</span>
        <span class="span"> {{this.surpassRate.totalSchoolRate}}%</span>
      </div>
    </el-row>
  </div>
</template>

<script>
import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\student.png'
import peopleUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\people.png'
import schoolUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\school.png'
import { getSchoolAndClassRate } from '@/api/studentGetData'
export default {
  name: 'schoolSurpassRate',
  mounted () {
    this.getSurpassRateData()
  },
  methods: {
    getSurpassRateData: function () {
      const prams = {
        userID: 1
      }
      getSchoolAndClassRate(prams).then(response => {
        this.surpassRate = response.data.info
        console.log(this.surpassRate)
        console.log(this.surpassRate.totalSchoolRate)
      })
    }
  },
  data () {
    return {
      imgUrl: imgUrl,
      peopleUrl: peopleUrl,
      schoolUrl: schoolUrl,
      surpassRate: []
    }
  }
}
</script>

<style scoped>
  .container{
    text-align: center;
  }
  .functionContainer{
    float: left;
  }
  .span{
    position:relative;
    top:-15px;
    font-weight: bold;
  }
</style>
