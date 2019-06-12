<template>
<!--  <h1>这是超越率</h1>-->
  <div class="container">
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="font-weight: bold;color: #19c237">─成绩超越率─</span>
    </el-row>
    <el-row style="padding-top: 30px">
      <div class="picturecontainer">
        <school-surpass-rate></school-surpass-rate>
<!--        <img v-bind:src="imgUrl" width="400%" style="margin-left: 100%">-->
      </div>
    </el-row>
<!--    <el-row>-->
<!--      <div class="rateContainer">-->
<!--        <school-surpass-rate></school-surpass-rate>-->
<!--      </div>-->
<!--    </el-row>-->
  </div>
</template>

<script>
import schoolSurpassRate from '~/components/graphDisplay/schoolSurpassRate'
export default {
  name: 'surpassrate',
  components: { schoolSurpassRate },
  data () {
    return {
      imgUrl: require('../../../../static/images/surpassrate.png')
    }
  }
}
</script>

<style scoped>
  .picturecontainer{
    width: 100%;
    height: 100%;
  }
  .rateContainer{
    text-align: center;
    margin-left: 20%;
  }

</style>
