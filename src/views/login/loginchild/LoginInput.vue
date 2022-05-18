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
                ismanage:"0"
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
            if(!/^[\da-zA-Z]{6,15}$/i.test(this.register.username))
            {
                this.$message({
                message:"用户名长度应为6到15个英文、数字字符，不能包含空格等其他字符",
                type: 'warning',
                })
                }
                else if(!/^[\da-zA-Z]{6,15}$/i.test(this.register.password)){
                    this.$message({
                    message:"密码长度应为6到15个英文、数字字符，不能包含空格等其他字符",
                    type: 'warning',
                    })
                }
                else if(this.register.password!=this.register.repassword){
                    this.$message({
                    message:"两次密码不一致",
                    type: 'warning',
                    })
                }
                else if(!/^[\d]{11}$/i.test(this.register.phonenumber)){
                    this.$message({
                    message:"手机号码应为11位",
                    type: 'warning',
                    })
                }
                else if(/.+?/i.test(this.register.checkcode)){
                    this.$message({
                    message:"验证码不能为空",
                    type: 'warning',
                    })
                }
                else{
                    Register(this.register).then(res=>{
                        console.log(res)
                        this.$router.replaceState("/user")
                                })
                }
            
        },
        //登录网络请求
        submitlogin(){
            if(!/^[\da-zA-Z]{6,15}$/i.test(this.login.username))
            {
                this.$message({
                message:"用户名长度应为6到15个英文、数字字符，不能包含空格等其他字符",
                type: 'warning',
                })
                }
                else if(!/^[\da-zA-Z]{6,15}$/i.test(this.login.password)){
                    this.$message({
                    message:"密码长度应为6到15个英文、数字字符，不能包含空格等其他字符",
                    type: 'warning',
                    })
                }
                 else if(!/.+?/i.test(this.login.checkcode)){
                    this.$message({
                    message:"验证码不能为空",
                    type: 'warning',
                    })
                }
                else{
                    Login(this.login).then(res=>{
                                    console.log(res)
                                    this.$router.push("/user")
                                }).catch(res=>{
                                     console.log(res)
                                    this.$router.replace("/user")
                                })
                   
                }
           
        },
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