<template>
  <div class="show_rpreorder">
      <MainBox>
        <MainList :type_num="['订单号','寄养开始日期','寄养结束日期','宠物名字','宠物类型','笼子类型','订单状态','操作']" :alldata="ManageList" v-if="ManageList[0]" :key="show_rpreorder_freshu">
        <template v-slot:a="a">
        <button @click="forest($event)" :data-ordercode="a.index.ordercode"  >开始寄养</button>
        <button @click="cancle($event)" :data-ordercode="a.index.ordercode" :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-pet_name="a.index.pet_name" :data-cage="a.index.cage">取消订单</button>
        </template>
        </MainList>
      </MainBox>
  </div>
</template>


<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';

import {GetAllRpreorder,PetForest,CancleOrder} from 'network/manage/order/order.js'

import { ElMessage,ElMessageBox } from 'element-plus'
export default {
  components:{
    MainBox,
    MainList
  },
  setup(props,context){
    let ManageList=reactive([])
    let show_rpreorder_freshu=ref("1")
    //开始寄养
    function forest(e){
      ElMessageBox.confirm("是否开始寄养",{
        confirmButtonText: '确认',
        cancelButtonText: '取消',
      }).then(()=>{
        PetForest({ordercode:e.target.dataset.ordercode})
      }).then(res=>{
        ElMessage.success("寄养成功")
      })
    }
    //取消订单
    function cancle(e){
      ElMessageBox.prompt('请输入取消理由', '取消订单', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',}).then(res=>{
          CancleOrder({
            ordercode:e.target.dataset.ordercode,
            reason:res.value,
            start_date:e.target.dataset.start_date,
            end_date:e.target.dataset.end_date,
            cage:e.target.dataset.cage,
            pet_name:e.target.dataset.pet_name
          }).then(res=>{
            ElMessage.success(res.data.结果)
          })
        })
    }
      return{
      ManageList,show_rpreorder_freshu,forest,cancle
    }
  },
    created(){
    GetAllRpreorder().then(res=>{
      for(let i=0;i<res.data.length;i++)
      this.ManageList.push({
        ordercode:res.data[i].ordercode,
        start_date:res.data[i].start_date,
        end_date:res.data[i].end_date,
        pet_name:res.data[i].pet_name,
        pet_type:res.data[i].pet_type,
        oreder_status:'已接受',
        cage:res.data[i].cage,
      })
    })
  }
}
</script>

<style>
.show_rpreorder{
  width: 100%;
  height: 100%;
}
</style>