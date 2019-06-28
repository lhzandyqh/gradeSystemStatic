<template>
  <div class="app-container">
    <el-row style="padding-top: 30px">
      <advantage-and-stable></advantage-and-stable>
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
