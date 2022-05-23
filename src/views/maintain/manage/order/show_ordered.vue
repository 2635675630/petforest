<template>
  <div class="show_ordered">
      <MainBox>
        <MainList :type_num="['订单号','寄养开始日期','寄养结束日期','宠物名字','宠物类型','笼子类型','消费金额',' ']" :alldata="ManageList" v-if="ManageList[0]" :key="freshu">
        </MainList>
      </MainBox>
  </div>
</template>


<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';

import {GetAllOrdered} from 'network/manage/order/order.js'

import { ElMessage,ElMessageBox } from 'element-plus'
export default {
  components:{
    MainBox,
    MainList
  },
  setup(props,context){
    let ManageList=reactive([])
    let freshu=ref("1")
      return{
      ManageList,freshu
    }
  },
    created(){
    GetAllOrdered().then(res=>{
      for(let i=0;i<res.data.length;i++)
      this.ManageList.push({
        ordercode:res.data[i].ordercode,
        start_date:res.data[i].start_date,
        end_date:res.data[i].end_date,
        pet_name:res.data[i].pet_name,
        pet_type:res.data[i].pet_type,
        cage:res.data[i].cage,
        money:res.data[i].money,
      })
    })
  }
}
</script>

<style>
.show_ordered{
  width: 100%;
  height: 100%;
}
</style>