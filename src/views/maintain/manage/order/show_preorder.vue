<template>
  <div class="show_preorder">
      <MainBox>
        <MainList :type_num="['订单号','寄养开始日期','寄养结束日期','宠物名字','宠物类型','笼子类型','订单状态','操作']" :alldata="ManageList" v-if="ManageList[0]" :key="freshu">
        <template v-slot:a="a">
        <button @click="takeover($event)" :data-ordercode="a.index.ordercode"  :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-cage="a.index.cage">接受</button>
        <button @click="refuse($event)" :data-ordercode="a.index.ordercode" :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-pet_name="a.index.pet_name">拒绝</button>
        </template>
        </MainList>
      </MainBox>
  </div>
</template>

<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';

import {GetAllPreOrder,TakeOverPreorder, RefusePreorder} from 'network/manage/order/order.js'

import { ElMessage,ElMessageBox } from 'element-plus'
export default {
    components:{
    MainBox,
    MainList
  },
  setup(props,context){
    let ManageList=reactive([])
    let freshu=ref(1)


    function takeover(e){
      ElMessageBox.confirm('是否确认接收订单',{
        confirmButtonText: '确认',
        cancelButtonText: '取消',
      }).then(()=>{
        TakeOverPreorder({
            ordercode:e.target.dataset.ordercode,
            start_date: e.target.dataset.start_date,
            end_date: e.target.dataset.end_date,
            cage: e.target.dataset.cage
        }).then(res=>{
          ElMessage.success(res.data.结果)
        })
      })
    }
    function refuse(e){
       ElMessageBox.prompt('请输入拒绝理由', '拒绝订单', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',}).then(res=>{
             RefusePreorder({
               ordercode:e.target.dataset.ordercode,
               reason:res.value,
               start_date:e.target.dataset.start_date,
               end_date:e.target.dataset.end_date,
               pet_name:e.target.dataset.pet_name
             }).then(res=>{
               ElMessage.success(res.data.结果)
             })
        })
    }

    return{
      ManageList,freshu,takeover,refuse
    }
  },
  created(){
    GetAllPreOrder().then(res=>{
      for(let i=0;i<res.data.length;i++)
      this.ManageList.push({
        ordercode:res.data[i].ordercode,
        start_date:res.data[i].start_date,
        end_date:res.data[i].end_date,
        pet_name:res.data[i].pet_name,
        pet_type:res.data[i].pet_type,
        oreder_status:'待接受',
        cage:res.data[i].cage,
      })
    })
  }
}
</script>

<style>
.show_preorder{
  width: 100%;
  height: 100%;
}
</style>