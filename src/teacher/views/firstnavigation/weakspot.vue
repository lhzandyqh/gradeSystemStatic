<template>
<!--  <h1>这是薄弱环节</h1>-->
  <div class="container">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─成绩超越率─</span>
    </el-row>
    <el-row style="margin-top: 30px">
      <span style="font-weight: bold;font-size: 20px">各科目超越率雷达图</span>
    </el-row>
    <el-row style="margin-top: 20px">
    </el-row>
    <el-row style="margin-top: 30px;margin-left: 27%">
      <myweakspot style="width: 60%;height: 500px"></myweakspot>
    </el-row>
    <el-row style="margin-top: 20px">
      <span style="font-weight: bold;float: left">1.红色线代表总成绩超过多少同学，黑色线代表单科成绩超过多少同学</span><br>
      <span style="font-weight: bold;float: left">2.红色线面积越大代表成绩越好，红色线上的点离中心越远越优秀</span><br>
      <span style="font-weight: bold;float: left">3.黑线上的点在红线外，则表示该科目在拉高总分，黑线上的点在红线外，则表示该科目在拉低总分。</span>
    </el-row>
  </div>
</template>

<script>
import myweakspot from '@/components/charts/weakSpot'
export default {
  name: 'weakspot',
  components: {myweakspot},
  data () {
    return {
      radio: 1
    }
  }
}
</script>

<style scoped>

</style>
