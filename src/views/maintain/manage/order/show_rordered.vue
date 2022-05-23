<template>
<div class="show_rordered_maintain">
  <div class="select ">
    <div class=" parent">
      <div class="div1">用户名</div>
      <div class="div2"><input type="text" v-model="form.username"></div>
      <div class="div3">宠物名</div>
      <div class="div4"><input type="text" v-model="form.pet_name"></div>
      <div class="div5"><button @click="select">搜索</button></div>
    </div>
  </div>
  <div class="show_rordered">
      <MainBox>
        <MainList :type_num="['订单号','寄养开始日期','寄养结束日期','宠物名字','宠物类型','笼子类型','消费金额',' ']" :alldata="ManageList" v-if="ManageList[0]" :key="freshu">
        </MainList>
      </MainBox>
  </div>
</div>

</template>


<script>
import MainBox from 'components/common/maintain/maintain.vue'
import MainList from 'components/common/list/list.vue'

import {reactive,ref} from 'vue';

import { SelectOrdered} from 'network/manage/order/order.js'

import { ElMessage,ElMessageBox } from 'element-plus'
export default {
  components:{
    MainBox,
    MainList
  },
  setup(){
    let ManageList=reactive([])
    let freshu=ref(1)
    let form=reactive({
      username:"",
      pet_name:""
    })
    function select(){
      SelectOrdered(this.form).then(res=>{
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
            money:res.data[i].money,
          })
        }
      }).then(()=>{
        console.log(this.freshu+=1)
      })
    }
    return{
      ManageList,freshu,form,select
    }
  }
}
</script>

<style scoped>
.show_rordered_maintain{
  width: 100%;
  height: 100%;
}
.show_rordered{
  width: 100%;
  height: 90%;
  position: relative;
}
.select{
  width: 100%;
  height: 10%;
  text-align: center;
}
.parent {
  position: relative;
  top: 50%;
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 1 / 4 / 2 / 5; }
.div5 { grid-area: 1 / 5 / 2 / 6; }

</style>