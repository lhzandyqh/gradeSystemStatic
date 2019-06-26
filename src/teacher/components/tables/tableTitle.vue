<template>
  <div>
    <el-row>
      <h4> 2017-2018学年第一学期七年级期中考试 </h4>
      <span style="font-weight: bold;color: #18a689">─ {{titleList}} ─</span>
    </el-row>
  </div>
</template>
<script>
export default {
  props: {
    titleList: {
      type: String,
      required: true,
      default: '年级成绩六率分析'
    }
  },
  data () {
    return {}
  }
}
</script>
<style>
</style>
