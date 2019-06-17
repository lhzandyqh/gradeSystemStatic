<template>
  <div>
    <div class="login-all">
      <img src="../../assets/jpg/login_b.jpg" class="login" alt>
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
          <el-button type="primary" class="input_" @click="loginBtn">登录</el-button>
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
    loginBtn () {
      const prams = {
        username: this.username,
        password: this.password
      }
      login(prams).then(res => {
        if (res.errno === 0) {
        }
      })
    }
  }
}
</script>
<style >
.login-all {
  position: relative;
  width: 100%;
  height: 800px;
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
  top: 220px;
  right: 100px;
}
.input_ {
  width: 75%;
  margin-bottom: 40px;
}
</style>
