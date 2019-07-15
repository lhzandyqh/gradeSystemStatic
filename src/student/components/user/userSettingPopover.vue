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
            <el-button type="text" @click="changeMyPassword">修改密码</el-button>
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
    <el-dialog
      title="修改我的密码"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <div class="changepasswordContainer">
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">输入我的新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="password" placeholder="请输入新密码"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="5">
          <el-col :span="6">
            <div class="title">
              <span style="font-size: 16px;font-weight: bolder">确认新密码</span>
            </div>
          </el-col>
          <el-col :span="12" :offset="1">
            <div class="input">
              <el-input v-model="confirmpassword" placeholder="请确认新密码"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="confirmToChangePassword">修改</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
import {changePassword} from '~/api/studentGetData'
export default {
  name: 'userSettingPopover',
  mounted () {
    this.showStudentName()
  },
  data () {
    return {
      dialogVisible: false,
      studentNumber: window.localStorage.getItem('studentNumber'),
      confirmpassword: '',
      password: '',
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
      window.location.href = './teacher.html#/login'
      location.replace('./teacher.html#/login')
      // this.$router.back(-1)
      // this.$router.push('/login')
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    changeMyPassword: function () {
      this.dialogVisible = true
    },
    confirmToChangePassword: function () {
      if (this.password === '' || this.confirmpassword === '') {
        this.$message.error('密码不能为空')
      } else {
        if (this.password !== this.confirmpassword) {
          this.$message({
            message: '两次密码输入不同',
            type: 'warning'
          })
        } else {
          const prams = {
            username: window.localStorage.getItem('studentNumber'),
            newpassword: this.password,
            assertpassword: this.confirmpassword
          }
          changePassword(prams).then(respone => {
            this.$message({
              message: '修改密码成功,请重新登录',
              type: 'success',
              duration: 5000
            })
            this.dialogVisible = false
            this.logout()
          })
        }
      }
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
