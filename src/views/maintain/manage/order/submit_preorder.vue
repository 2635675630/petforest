<template>
  <div class="submit_preorder">
      <MainBox>
        <div class="parent">
          <div class="div1">{{form.start_date}}</div>
          <div class="div2">----------------------------</div>
          <div class="div3">{{form.end_date}}</div>
          <div class="div4">Cage笼子数量：{{form.small}}</div>
          <div class="div5">Medium笼子数量：{{form.medium}}</div>
          <div class="div6">Large笼子数量：{{form.large}}</div>
          <div class="div7">用户名</div>
          <div class="div8"><input type="text" v-model="form.username" ></div>
          <div class="div9">寄养开始日期</div>
          <div class="div10"><input type="date" v-model="form.start_date" @change="change_cagenum"></div>
          <div class="div11">寄养结束日期</div>
          <div class="div12"><input type="date" v-model="form.end_date" @change="change_cagenum"></div>
          <div class="div13">宠物类型</div>
          <div class="div14"><input type="text" v-model="form.pettype"></div>
          <div class="div15">宠物名</div>
          <div class="div16"><input type="text" v-model="form.petname"></div>
          <div class="div17">是否上门</div>
          <div class="div18">
            <el-radio v-model="form.isaddress" label="1" size="small">是</el-radio>
            <el-radio v-model="form.isaddress" label="0" size="small">否</el-radio>
          </div>
          <div class="div19">上门地址</div>
          <div class="div20"><input type="text" v-model="form.address"></div>
          <div class="div21">笼子类型</div>
          <div class="div22">
            <select name="cage"  v-model="form.cage">
												<option value="small">small</option>
												<option value="medium">medium</option>
												<option value="large">large</option>
											</select>  
          </div>
          <div class="div23"><button :disabled="form.able" @click="submit">提交</button></div>
        </div>
      </MainBox>
  </div>
</template>

<script>

import MainBox from 'components/common/maintain/maintain.vue'

import{GetCurrentCage} from 'network/manage/cage/cage.js'
import{SubmitPreOrder} from 'network/manage/order/order.js'

import {reactive,ref} from 'vue';

import { ElMessage } from 'element-plus'
import { is } from '@babel/types';
export default {
  setup(){
    let form=reactive({
      start_date:null,
      end_date:null,
      username:null,
      pettype:null,
      petname:null,
      isaddress:0,
      address:"",
      cage:null,
      small:null,
      medium:null,
      large:null,
      able:true
    })
    function change_cagenum(){
      if (this.form.start_date!=null && this.form.end_date !=null){
        let sd = new Date(Date.parse(this.form.start_date))
        let ed = new Date(Date.parse(this.form.end_date))
        if (sd.getTime() <= ed.getTime()) {
          GetCurrentCage(this.form).then(res=>{
            this.form.small=res.data.small
            this.form.medium=res.data.medium
            this.form.large=res.data.large
          }).then(()=>{
            this.form.able=false
          })
        }
        else{
          ElMessage.warning("寄养开始日期不可比寄养结束日期晚")
          this.form.able=true
        }
      }
    }
    function submit(){
      if (this.form.cage == "small" &&this.form.small < 1) {
                ElMessage.error("所选small号笼子类型已没有空位请重新选择")
            } else if (this.form.cage == "medium" && this.form.medium < 1) {
                ElMessage.error("所选medium号笼子类型已没有空位请重新选择")
            } else if (this.form.cage == "large" && this.form.large < 1) {
                ElMessage.error("所选large号笼子类型已没有空位请重新选择")
            } else if(this.form.cage==null){
              ElMessage.error("未选择寄养笼子类型")
            }
            else{
              SubmitPreOrder(this.form).then(res=>{
                ElMessage.success(res.data.结果)
              }).then(()=>{
                  this.form.start_date=null,
                  this.form.end_date=null,
                  this.form.username=null,
                  this.form.pettype=null,
                  this.form.petname=null,
                  this.form.isaddress=0,
                  this.form.address="",
                  this.form.cage=null,
                  this.form.small=null,
                  this.form.medium=null,
                  this.form.large=null,
                  this.form.able=true
                
              }).catch(res=>{
                ElMessage.error(res)
              })
            }
    }
    return{
      form,change_cagenum,submit
    }
  },
  components:{
    MainBox
  }
}
</script>

<style>
.submit_preorder{
  width: 100%;
  height: 100%;
}
.parent {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(11, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
text-align: center;
height: 100%;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }
.div9 { grid-area: 4 / 1 / 5 / 2; }
.div10 { grid-area: 4 / 2 / 5 / 3; }
.div11 { grid-area: 5 / 1 / 6 / 2; }
.div12 { grid-area: 5 / 2 / 6 / 3; }
.div13 { grid-area: 6 / 1 / 7 / 2; }
.div14 { grid-area: 6 / 2 / 7 / 3; }
.div15 { grid-area: 7 / 1 / 8 / 2; }
.div16 { grid-area: 7 / 2 / 8 / 3; }
.div17 { grid-area: 8 / 1 / 9 / 2; }
.div18 { grid-area: 8 / 2 / 9 / 3; }
.div19 { grid-area: 9 / 1 / 10 / 2; }
.div20 { grid-area: 9 / 2 / 10 / 3; }
.div21 { grid-area: 10 / 1 / 11 / 2; }
.div22 { grid-area: 10 / 2 / 11 / 3; }
.div23 { grid-area: 11 / 2 / 12 / 3; } 

</style>