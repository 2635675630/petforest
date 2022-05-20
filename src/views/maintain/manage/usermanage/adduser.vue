<template>
  <div class="maintain" >
      <h1>添加管理员</h1>
      <input  class="maintain_input" v-model="register.username" placeholder="请输入用户名" />
      <input  class="maintain_input" v-model="register.password"  type="password" placeholder="请输入密码" />
      <input  class="maintain_input" v-model="register.phonenumber"   placeholder="请输入电话号码" />
      <el-button class="button" plain @click="submitregister">确认</el-button>
  </div>
</template>

<script>
import  {GetEchartData} from 'network/manage/usermanage/usermanage.js'
export default {
    data(){
        return{
            register:{
                username:null,
                password:null,
                phonenumber:null
            }
        }
    },
    methods:{
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
                }else if(!/\d{11}/i.test(this.register.phonenumber)){
                    this.$message({
                    message:"电话号码长度应为11位",
                    type: 'warning',
                    })
                }
                else{
                    GetEchartData(this.register).then(()=>{
                        this.$message({
                            message:"添加成功",
                            type: 'success',
                            })
                        this.register.username=null
                        this.register.password=null
                        this.register.phonenumber=null
                    }).catch(res=>{
                         this.$message({
                            message:"添加失败",
                            type: 'error',
                            })
                        console.log(res)
                    })
                }
            
        }
    }
}
</script>

<style scoped>
    .maintain{
        display: flex;
        position: relative;
        width: 50%;
        height: 50%;
        box-shadow: 0 0 3px 3px rgba(0,0,0,0.3);
        top: 25%;
        left: 25%;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        text-align: center;
    }
     .maintain_input,.button{
        margin: 5px auto;
        height: 50px;
        width: 80%;
        background-color: transparent;
        border: none;
        border-radius: 5px;
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.3);
        font-size: 20px;
    }
    .button:hover,.button:focus{
        background-color: rgba(0,0,0,0.1);
    }
</style>