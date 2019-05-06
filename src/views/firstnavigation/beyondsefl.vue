<template>
  <div class="container">
<!--    <h1>这是超越自我模块</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─理想成绩─</span><br><br>
      <span style="text-align: center;font-size: 14px">曾经有珍贵的5分放在我面前我没有珍惜，如果再给我一次机会，我会说“不要再马虎了</span>
    </el-row>
    <el-row>
      <div class="picturecontainer">
        <img v-bind:src="imgUrl" width="80%">
      </div>
    </el-row>
  </div>
</template>

<script>
import imgUrl from '/Users/lannister/WebstormProjects/gradeSystemStatic/static/images/beyondself.png'
export default {
  name: 'beyondsefl',
  data () {
    return {
      imgUrl: imgUrl
    }
  }
}
</script>

<style scoped>

</style>
