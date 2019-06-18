<template>
  <div>
    <div class="login-all">
      <img src="../../assets/jpg/login-logo.jpg" class="login-logo" alt>
      <div class="login_">
        <img src="../../assets/jpg/login.jpg" class="login-bg" alt>
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
            // let localhost = 'localhost/teacher.html#/fisrtpage'
            // console.log(localhost, 'test')
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
.login_ {
  position: relative;
  width: 100%;
  height: auto;
}
.login-logo {
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
  width: 100%;
}
.login-center {
  text-align: center;
  margin: 100px auto;
}
.login {
  width: 100%;
  height: 100%;
}
.login-input {
  position: absolute;
  width: 500px;
  height: 460px;
  background: #fff;
  border-radius: 20px;
  bottom: 100px;
  right: 150px;
}
.input_ {
  width: 75%;
  margin-bottom: 40px;
}
</style>
