<template>
  <div>
    <div class="login-all">
      <img src="../../assets/jpg/login-logo.png" class="login-logo" alt>

      <img src="../../assets/jpg/login_b_t.jpg" class="login-bg" alt>
      <div class="login-input" style="opacity: .9;">
        <div class="loginTitle">用户登录</div>
        <div class="login-center">
          <el-input
            v-model="username"
            class="input_ input1"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
          <el-input
            v-model="password"
            class="input_ input2"
            placeholder="请输入密码"
            prefix-icon="el-icon-attract"
          ></el-input>
        </div>
        <div class="forget">忘记密码？</div>
        <el-button type="primary" class="subBtn" @click="loginBtn">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/studentGetData'
export default {
  data () {
    return {
      username: '',
      password: '',
      examType: '',
      classGrade: []
    }
  },
  methods: {
    // 登录
    loginBtn () {
      if (this.username === '') {
        this.$message({
          message: '请输入用户名',
          type: 'warning'
        })
        return
      }
      if (this.password === '') {
        this.$message({
          message: '请输入密码',
          type: 'warning'
        })
        return
      }
      const prams = {
        username: this.username,
        password: this.password
      }
      login(prams).then(res => {
        if (res.data.errno === 200) {
          this.id = res.data.id
          window.localStorage.setItem('id', this.id) // 把id存入缓存
          if (res.data.rolename === '学生') {
            window.location.href = '/student.html#/fisrtpage'
          }
          if (res.data.rolename === '任课教师') {
            window.location.href = '/teacher.html#/fisrtpage'
          }
          this.$message({
            message: '恭喜你，登录成功',
            type: 'success',
            duration: 5000
          })
        } else {
          if (this.username === '' || this.password === '') {
            this.$message({
              message: '账号和密码不能为空',
              type: 'warning',
              duration: 3000
            })
          } else {
            if (res.data.errmsg === '密码错误') {
              this.$message({
                message: '密码错误',
                type: 'warning',
                duration: 3000
              })
            }
          }
        }
      })
    }
  }
}
</script>
<style >
  .subBtn{
    width: 80%;
    margin-left: 10%;
  }
  .forget{
    font-size: 13px;
    color: red;
    width: 80%;
    margin: 0px auto;
    text-align: right;
    margin-top: -20px;
    margin-bottom: 30px;
  }
.loginTitle{
  text-align: center;
  font-size: 18px;
  margin-top: 50px;
}
.login-bg{
  width: 100%;
  height: 100%;
}
.login-logo {
 position: absolute;
 top: 0;
 left: 0;
  width: 550px;
  height: 100px;
  margin: 20px;
}
.Password {
  position: absolute;
  font-size: 14px;
  color: red;
  bottom: 215px;
  right: 60px;
  cursor: pointer;
}
body {
  margin: 0;
}
.login-all {
  position: relative;
  width: 100%;
  height: 800px;
}
.login-center {
  text-align: center;
  width: 80%;
  margin: 40px auto;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.login-input {
  position: absolute;
  width: 400px;
  height: 360px;
  background: #e1edf8;
  border-radius: 10px;
  bottom: 100px;
  right: 150px;
}
.input_ {
  border: none;
}
  input{
    border: none!important;
  }
.input1 input{
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.input2 input{
  border-top: 1px solid #ccc!important;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
