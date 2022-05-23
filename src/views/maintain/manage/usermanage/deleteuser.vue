<template>
      <div class="deleteuser">
      <MainBox>
        <MainList :type_num="['用户名','密码','电话号码','操作']" :alldata="ManageList" v-if="ManageList[0]" :key="freshu">
        <template v-slot:a="a"><button @click="deleteuser($event)" :data-bn="a.index.username">删除</button></template>
        </MainList>
      </MainBox>
  </div>
</template>

<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';
import { ElMessage,ElMessageBox } from 'element-plus'

import {GetUserList,DeleteUser} from 'network/manage/usermanage/usermanage.js'
export default {
  components:{
    MainBox,
    MainList
  },
  setup(){
    let ManageList=reactive([])
    let freshu=ref(1)
    //删除用户函数
    function deleteuser(e) {
      ElMessageBox.confirm('确认删除',{
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }).then(()=>{
      DeleteUser(e.target.dataset.bn).then(res=>{
        if(res.data.结果=='删除成功'){
          ElMessage.success('删除成功')
           this.ManageList=[]
           // 网络请求获取管理员账户列表
           GetUserList().then(res=>{
      for(let i=0;i<res.data.length;i++){
        this.ManageList.push({
          username:res.data[i].username,
          password:res.data[i].password,
          phonenumber:res.data[i].phonenumber
        })
      }
    }).then(()=>{
      this.freshu+=1
    })
    
        }
        else{
          ElMessage.error('请求失败')
        }
      }).catch(res=>{
        console.log(res)
          ElMessage.error(res)
      })
    }).catch(res=>{})
      
    }
    return{
      ManageList,freshu,
      deleteuser
    }
  },
  created(){
    // 网络请求获取管理员账户列表
    GetUserList().then(res=>{
      for(let i=0;i<res.data.length;i++){
        this.ManageList.push({
          username:res.data[i].username,
          password:res.data[i].password,
          phonenumber:res.data[i].phonenumber
        })
      }
    })
  }
}
</script>

<style>
.deleteuser{
  width: 100%;
  height: 100%;
}
</style>