<template>
  <div class="show_ordering">
      <MainBox>
        <MainList :type_num="['订单号','寄养开始日期','寄养结束日期','宠物名字','宠物类型','笼子类型','订单状态','消费金额','操作']" :alldata="ManageList" v-if="ManageList[0]" :key="freshu">
        <template v-slot:a="a">
        <button @click="bill($event)" :data-ordercode="a.index.ordercode"  :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-cage="a.index.cage" :data-money="a.index.money">结账</button>
        <button @click="cancle($event)" :data-ordercode="a.index.ordercode" :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-pet_name="a.index.pet_name" :data-cage="a.index.cage">取消</button>
        <button @click="send($event)" :data-ordercode="a.index.ordercode" :data-start_date="a.index.start_date" :data-end_date="a.index.end_date" :data-pet_name="a.index.pet_name" :data-cage="a.index.cage">提醒</button>
        </template>
        </MainList>
      </MainBox>
  </div>
</template>

<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';

import {CancleOrder,GetAllOrdering,BillOrder,SendMessage} from 'network/manage/order/order.js'

import { ElMessage,ElMessageBox } from 'element-plus'
export default {
  components:{
    MainBox,
    MainList
  },
  setup(props,context){
    let ManageList=reactive([])
    let freshu=ref(1)
    //开始寄养
    function bill(e){
      ElMessageBox.confirm("是否结账",{
        confirmButtonText: '确认',
        cancelButtonText: '取消',
      }).then(()=>{
        BillOrder({
          ordercode:e.target.dataset.ordercode,
          start_date:e.target.dataset.start_date,
          end_date:e.target.dataset.end_date,
          cage:e.target.dataset.cage,
          money:e.target.dataset.money
          })
      }).then(res=>{
        ElMessage.success("结账成功")
      }).then(()=>{
            GetAllOrdering().then(res=>{
              for(let i=this.ManageList.length;i>0;i--){
              this.ManageList.pop()
               }
          for(let i=0;i<res.data.length;i++){
            this.ManageList.push({
            ordercode:res.data[i].ordercode,
            start_date:res.data[i].start_date,
            end_date:res.data[i].end_date,
            pet_name:res.data[i].pet_name,
            pet_type:res.data[i].pet_type,
            cage:res.data[i].cage,
            flag:res.data[i].flag=1?"寄养中":"即将到期",
            money:res.data[i].money,
          })
          }
        }).then(()=>{
        this.freshu+=1
      })
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
    //提醒领取
    function send(e){
      SendMessage({
        start_date: e.target.dataset.start_date,
        end_date:e.target.dataset.end_date,
        ordercode: e.target.dataset.ordercode,
        pet_name: e.target.dataset.pet_name
      }).then(res=>{
        ElMessage.success("成功发送提醒信息")
      })
    }
      return{
      ManageList,freshu,bill,cancle,send
    }
  },
    created(){
    GetAllOrdering().then(res=>{
      for(let i=0;i<res.data.length;i++){
        this.ManageList.push({
        ordercode:res.data[i].ordercode,
        start_date:res.data[i].start_date,
        end_date:res.data[i].end_date,
        pet_name:res.data[i].pet_name,
        pet_type:res.data[i].pet_type,
        cage:res.data[i].cage,
        flag:res.data[i].flag=1?"寄养中":"即将到期",
        money:res.data[i].money,
        
      })
      }
    })
  }

}
</script>

<style>
.show_ordering{
  width: 100%;
  height: 100%;
}
</style>