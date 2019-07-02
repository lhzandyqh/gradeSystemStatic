<template>
  <div class="app-container">
    <el-row style="padding-top: 30px">
      <advantage-and-stable></advantage-and-stable>
    </el-row>
    <el-row style="padding-top: 20px">
      <span style="font-size: 15px;font-weight: bolder">优势及稳定学科图通过单科的纵向对比，横向全科对比，分析出优势及稳定学科</span>
    </el-row>
  </div>
</template>

<script>
import advantageAndStable from '~/components/charts/advantageAndStable'
export default {
  name: 'advantageStableSubject',
  components: { advantageAndStable }
}
</script>

<style scoped>

</style>
