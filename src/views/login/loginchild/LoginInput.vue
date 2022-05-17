<template>
  <div class="logininput">
            <div class="input_left">
                <div class="form_left">
                    <h2>宠物信息管理系统</h2>
                <h4>注册</h4>
                <el-input v-model="register.username" placeholder="请输入用户名" />
                <el-input v-model="register.password" type="password" placeholder="请输入密码" show-password/>
                <el-input v-model="register.repassword" type="password" placeholder="请再次输入密码" show-password/>
                <el-input v-model="register.phonenumber" placeholder="请输入电话号码" />
                <el-input v-model="register.checkcode" placeholder="请输入验证码" />
                <img src="/checkcodeServlet" alt="验证码" ref="checkcode1" name="recheckcode" @click="changeimg">
                <el-button plain @click="submitregister">确认</el-button>
                </div>
            </div>
            <div class="input_right">
                <div class="form_right">
                    <h2>宠物信息管理系统</h2>
                <h4>登录</h4>
                <el-input v-model="login.username" placeholder="请输入用户名"  />
                <el-input v-model="login.password" type="password" placeholder="请输入密码" show-password/>
                <el-radio v-model="login.ismanage" label="1" size="small">管理员</el-radio>
                <el-radio v-model="login.ismanage" label="0" size="small">用户</el-radio>
                <el-input v-model="login.checkcode" placeholder="请输入验证码" />
                <img src="/checkcodeServlet" alt="验证码" ref="checkcode2" name="recheckcode" @click="changeimg">
                <el-button plain @click="submitlogin">确认</el-button>
                </div>
            </div>
        </div>
</template>

<script>
import {Register,Login} from 'network/login.js'

export default {
    data(){
        return{
            register:{
                username:null,
                password:null,
                repassword:null,
                phonenumber:null,
                checkcode:null
                },
            login:{
                username:null,
                password:null,
                checkcode:null,
                ismanage:false
        },
        checkcodeimg:null
        }
    },
    methods:{
        //切换验证码图片
        changeimg(){
            let recheckcode1=document.getElementsByName("recheckcode")[0]
            let recheckcode2=document.getElementsByName("recheckcode")[1]
            let img="/checkcodeServlet?"+new Date().getMilliseconds();
            recheckcode1.src=img
            recheckcode2.src=img
        },
        //注册网络请求
        submitregister(){
            if(this.register.username==null||this.register.username.length<15||this.register.username.length>5)
            {this.$confirm("用户注册用户名长度应大于5小于15","用户名长度错误",{
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning',
                center: true,
                })}
            Register(this.register).then(res=>{
                console.log(res)
            })
        },
        //登录网络请求
        submitlogin(){
            Login(this.login).then(res=>{
                console.log(res)
            })
        },
        test(){
            this.$alert('123')
        }
    },

}

</script>

<style scoped>
el-message-box{
    position: absolute;
    top:0
}
.logininput{
    width: 60vw;
    height: 80vh;
    border-radius: 30px;
    background-color: white;
    position: absolute;
    top: 10vh;
    left: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-content: center;

}

.input_left,.input_right{
    display: block;
    flex:1
}
.form_left,.form_right{
    width: 70%;
    height: 60%;
    position: relative;
    top: 20%;
    left: 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    text-align: center;
}

.form_left  img,.form_right img{
    width: 80%;
    height: 14%;
}
</style>