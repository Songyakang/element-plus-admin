<template>
  <div class="login_bg">
    <div class="login_box">
      <div class="title">Element-plus-admin</div>
      <div class="form_login_user">
        <el-form hide-required-asterisk :model="state" :rules="rules" ref="loginFormRef" class="demo-ruleForm">
          <el-form-item prop="userName">
            <el-input prefix-icon="el-icon-user" v-model="userName" placeholder="用户名/手机号码" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="passWord">
            <el-input prefix-icon="el-icon-lock" type="password" placeholder="请输入密码" show-password="true" v-model="passWord" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item prop="autoCode">
            <div class="autoCode_form">
              <el-input v-model.number="autoCode" placeholder="请输入验证码" ></el-input>
              <div class="security_form">xxxx</div>
            </div>
          </el-form-item>
          <el-checkbox v-model="isChecked">记住密码</el-checkbox>
          <el-form-item>
            <el-button :loading="loading" class="form_button" round type="primary" @click="submitForm('state')">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="forget_password">
        <a href="">忘记密码</a>
        <a href="">立即注册</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive,toRefs ,ref} from "vue";
import { useRouter } from "vue-router"
import {ElMessage} from "element-plus";
const state = reactive({
  userName:"",
  passWord:"",
  autoCode:"",
  autoCodeUrl:"",
  isChecked:false,
  loading:false
});

const router = useRouter();

const loginFormRef=ref(null)

const submitForm=(key:string):void=>{
  loginFormRef.value.validate((valid) => {
    if (valid) {
      if(state.userName=="admin" && state.passWord == "123456"){
        state.loading = true
        setTimeout(()=>{
          state.loading = false
          document.cookie = `AuthorityToken=${JSON.stringify({...state})}`
          router.push("/goodsList")
        },1000)
      }else{
        ElMessage.error("用户名或密码错误")
      }
      console.log(valid)
    } else {
      console.log('error submit!!');
      return false;
    }
  })
}

const rules = {
  userName: [{ required: true, message: "请输入用户名/手机号码", trigger: "blur" }],
  passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
  autoCode: [{ required: true, message: "请输入验证码", trigger: "blur" }],
}

const { userName,passWord,autoCode,autoCodeUrl ,isChecked,loading} = toRefs(state)

</script>

<style scoped lang="less">
  .login_bg{
    width: 100vw;
    height: 100vh;
    background: url("@/assets/loginbg.jpg") no-repeat;
    background-size: cover;
    position: relative;

    .login_box{
      width: 25vw;
      height: 23vw;
      position: fixed;
      top: 50%;
      right: 10vw;
      transform: translate(0,-50%);
      background: #fff;
      border-radius: 74px;
      box-shadow: #f2f2f2 1px 1px 5px;
      padding: 20px;
      box-sizing: border-box;
    }

    .title{
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-weight: bold;
      font-style: italic;
      user-select: none;
    }

    .form_login_user{
      width: 80%;
      margin: 20px auto;
    }


    .autoCode_form{
      display: flex;


      .security_form{
        width: 140px;
        margin-left: 32px;
        height: 38px;
        border: 1px solid #dcdfe6;
        border-radius: 4px;
        text-align: center;
      }
    }

    .form_button{
      width: 100%;
    }

    .forget_password{
      display: flex;
      justify-content: space-around;

      >a{
        text-decoration:none
      }
    }
  }
</style>