<template>
  <div class="appContainer">
    <el-popover
      placement="bottom"
      width="200"
      trigger="hover">
      <div class="content">
        <span style="font-weight: bolder">当前用户：</span>
<!--        <span>{{this.toPopoverData}}</span>-->
        <span style="font-weight: bolder">{{this.student[0].studentName}}</span>
        <el-divider style="padding-top: 10px"></el-divider>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-unlock"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text">修改密码</el-button>
          </div>
        </div>
        <div class="function_item">
          <div class="functionLogo">
            <i class="el-icon-open"></i>
          </div>
          <div class="functionTitle">
            <el-button type="text" @click="logout">退出登录</el-button>
          </div>
        </div>
      </div>
      <i class="el-icon-s-custom" slot="reference"></i>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: 'userSettingPopover',
  mounted () {
    this.showStudentName()
  },
  data () {
    return {
      // studentName: window.localStorage.getItem('studentName')
      student: [{
        studentName: {}
      }]
    }
  },
  methods: {
    showStudentName: function () {
      this.$set(this.student, 0, {studentName: window.localStorage.getItem('studentName')})
      console.log('查看学生要显示的名字数据')
      console.log(this.student)
    },
    logout: function () {
      window.localStorage.clear()
      window.location.href = '/teacher.html#/login'
      location.replace('/teacher.html#/login')
      // this.$router.back(-1)
      // this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
  .content{
    text-align: center;
  }
  .function_item{
    float: left;
    display: inline-block;
  }
  .functionLogo{
    float: left;
    margin-left: 30px;
  }
  .functionTitle{
    float: left;
    margin-left: 60px;
    margin-top: -10px;
  }

</style>
