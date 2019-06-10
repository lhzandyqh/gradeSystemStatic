<template>
<!--  <h1>这是超越率</h1>-->
  <div class="container">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─成绩超越率─</span>
    </el-row>
    <el-row>
      <div class="picturecontainer">
        <img v-bind:src="imgUrl" width="400%" style="margin-left: 100%">
      </div>
    </el-row>
  </div>
</template>

<script>
// import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\surpassrate.png'
export default {
  name: 'surpassrate',
  data () {
    return {
      imgUrl: require('../../../../static/images/surpassrate.png')
    }
  }
}
</script>

<style scoped>
  .picturecontainer{
    width: 200px;
    height: 200px;
  }

</style>
