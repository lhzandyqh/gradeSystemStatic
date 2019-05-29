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
        <img v-bind:src="imgUrl" width="80%">
      </div>
    </el-row>
    <el-row>
      <div class="chartcontainer">
        <hero-pk-chart style="width: 100%;height: 500px"></hero-pk-chart>
      </div>
    </el-row>
  </div>
</template>

<script>
import classmatePkTable from '@/components/tables/classmatePkTable'
import heroPkChart from '@/components/charts/heroPkChart'
import imgUrl from 'D:\\VueProject\\gradeSystemStatic\\static\\images\\herospk.png'
export default {
  name: 'heropk',
  components: {classmatePkTable, heroPkChart},
  data () {
    return {
      imgUrl: imgUrl
    }
  }
}
</script>

<style scoped>

</style>
