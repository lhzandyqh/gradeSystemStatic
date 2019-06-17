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
      if(this.username===""){
        this.$message({
           message: "请输入用户名",
          type: 'warning'
        })
        return
      }if(this.password===''){
        this.$message({
          message:'请输入密码'
        })
        return
      }
      const prams = {
        username: this.username,
        password: this.password
      }

      login(prams).then(res => {
        // console.log(res.data.rolename,'8888888')

          console.log(res.data.rolename==='学生','hehheheh')
          if(res.data.rolename==='学生'){
            this.$router.push({
              path:'window.location.hrefwindow.location.href="http://58.119.112.12:11008/teacher.html#/fisrtpage'
            })
          }if(res.data.rolename==='任课教师'){
            this.$router.push({
              path:'',
            })
          }
        // if (res.errno === 200) {
        
        // }
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
