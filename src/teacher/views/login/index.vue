<template>
  <div>
    <div class="login-all">
      <img src="../../assets/jpg/login-logo.png" class="login-logo" alt>

      <img src="../../assets/jpg/login_b_t.jpg" class="login-bg" alt>
      <div class="login-input">
        <div class="login-center">
          <el-input
            v-model="username"
            class="input_"
            placeholder="请输入用户名"
            prefix-icon="el-icon-user"
          ></el-input>
          <el-input
            v-model="password"
            class="input_"
            placeholder="请输入密码"
            prefix-icon="el-icon-attract"
          ></el-input>
          <el-button type="primary" class="input_" style="margin-top:20px;" @click="loginBtn">登录</el-button>
        </div>
        <span class="Password">忘记密码？</span>
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
      password: ''
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
          if (res.data.rolename === '学生') {
            window.location.href = '/student.html#/fisrtpage'
          }
          if (res.data.rolename === '任课教师') {
            window.location.href = '/teacher.html#/fisrtpage'
          }
        }
      })
    }
  }
}
</script>
<style >

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
  margin: 100px auto;
}
.login-input {
  position: absolute;
  width: 500px;
  height: 460px;
  background: #fff;
  border-radius: 10px;
  bottom: 100px;
  right: 150px;
}
.input_ {
  width: 75%;
  margin-bottom: 40px;
}
</style>
