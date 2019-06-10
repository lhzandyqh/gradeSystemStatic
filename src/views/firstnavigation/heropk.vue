<template>
  <div class="container">
<!--    <h1>这是英雄PK模块</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─英雄榜─</span><br><br>
      <span style="text-align: center;font-size: 14px">与超越自己的同学PK一下吧</span>
    </el-row>
    <el-row>
      <classmate-pk-table style="margin-top: 10px"></classmate-pk-table>
    </el-row>
    <el-row style="margin-top: 50px">
      <div class="picturecontainer">
        <img v-bind:src="imgUrl" width="80%" style="margin-left: 0%">
      </div>
    </el-row>
  </div>
</template>

<script>
import classmatePkTable from '@/components/tables/classmatePkTable'
// import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\herospk.png'
export default {
  name: 'heropk',
  components: {classmatePkTable},
  data () {
    return {
      imgUrl: require('../../../static/images/herospk.png')
    }
  }
}
</script>

<style scoped>

</style>
