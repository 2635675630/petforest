<template>
  <div class="deletemanage">
      <MainBox>
        <MainList :type_num="['用户名','密码','电话号码','操作']" :alldata="ManageList" v-if="ManageList[0]">
        <template v-slot:a="a"><button @click="get($event)" :data-bn="a.index.username">删除</button></template>
        </MainList>
      </MainBox>
  </div>
</template>

<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive} from 'vue';

import {GetManageList} from 'network/manage/usermanage/usermanage.js'
export default {
  setup(){
    let ManageList=reactive([])
    function get(e) {
      console.log(e.target.dataset.bn)
    }
    return{
      ManageList,
      get
    }
  },
  components:{
    MainBox,
    MainList
  },
  created(){
    // 网络请求获取管理员账户列表
    GetManageList().then(res=>{
      for(let i=0;i<32;i++){
        this.ManageList.push({
          username:i,
          password:i,
          phonenumber:i
        })
      }
      console.log(this.ManageList)
    })
  }
}
</script>

<style>
.deletemanage{
  width: 100%;
  height: 100%;
}
</style>