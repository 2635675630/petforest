<template>
  <div class="list">
      <ul id="head">
          <li>订单号</li>
          <li>宠物名</li>
          <li>宠物状态内容</li>
          <li>宠物状态图片</li>
          <li>修改内容</li>
          <li>上传图片</li>
      </ul>
      <ul v-for="(items,index) in datalist" :key="index" >
            <li>{{items.ordercode}}</li>
            <li>{{items.pet_name}}</li>
            <li><img :src="items.pet_img" alt=""></li>
            <li>{{items.ordercode}}</li>
            <li v-if="items"><textarea name="" id="" cols="5" rows="5"></textarea></li>
            <li v-if="items"><input type="file" name="" id=""></li>
            <li v-if="items"><button :index="items">修改</button></li>
      </ul>
      <ul id="footer">
          <li>
            <button @click="prepage">上一页</button>
            <button @click="nextpage">下一页</button>
            <span v-show="currentpage.page==tolltaltpage.page">已显示全部</span>
          </li>
      </ul>
  </div>
</template>

<script>
import {reactive} from 'vue';
import { ElMessage } from 'element-plus'
 
import {GetPetstatus}from 'network/manage/petstatus/petstatus.js'
export default {
    setup(props,context) {
        let datalist = reactive([])
        let currentpage=reactive({page:1})
        let tolltaltpage=reactive({page:null})
        let alldata=reactive([])
        function nextpage(){
            //当前页不等于总页数即进行下一页操作
            if(this.currentpage.page!=this.tolltaltpage.page){
                this.currentpage.page+=1
                this.datalist=[]
            if(this.currentpage.page==this.tolltaltpage.page){
                for(let i=(this.currentpage.page-1)*4;i<this.alldata.length;i++){
                    console.log(this.alldata[i])
                this.datalist.push(this.alldata[i])
                }
            }
            else{
                for(let i=0;i<4;i++){
                this.datalist.push(this.alldata[i+(this.currentpage.page-1)*4])
                }
            }
            }
            //当前页等于总数页则进行提示
            else{
                ElMessage.warning({
                message:"已显示全部",
                type: 'warning',
                })
            }
            }
        function prepage(){
            //当前页不等于总页数即进行下一页操作
            if(this.currentpage.page!=1){
                this.currentpage.page-=1
                this.datalist=[]
                for(let i=(this.currentpage.page-1)*4;i<(this.currentpage.page-1)*4+4;i++){
                    this.datalist.push(props.alldata[i])
                }
            }
            else{
                ElMessage.warning({
                message:"已在第一页",
                type: 'warning',
                })
            }
        }
            
        
        return {
            datalist,currentpage,tolltaltpage,nextpage,prepage,alldata
        };
    },
    props: {
    },
    created(){
      console.log(1)
      GetPetstatus().then(res=>{
        this.tolltaltpage.page=Math.ceil(res.data.length/4)
        for(let i=0;i<res.data.length;i++){
          this.datalist.push({
            ordercode:res.data[i].ordercode,
            pet_img:res.data[i].image,
            pet_name:res.data[i].pet_name,
            pet_content:res.data[i].content
          })
        }
      }).then(()=>{
        for(let i=0;i<4&&i<this.alldata.length;i++){
          this.datalist.push(this.alldata[i])
        }
      })
    }
}
</script>

<style scoped>
.list {
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
}
.list ul{
    display: flex;
    flex-direction: row;
    list-style-type: none;
    text-align: center;
    height: 8%;
    flex-wrap: nowrap;
    
}
.list ul li{
    flex:1;
    flex-grow: 1;
    flex-shrink: 0;
    
}
.list ul li{
    font-size: 13px;
    line-height: 250%;
}
.list #head{
    width: 100%;
    height: 10%;
    
}
.list #head li{
    line-height: 280%;
    font-size: 15px;
    color: black;
}
.list #footer{
    justify-content: flex-start;
    height: 10%;
    width: 100%;
}
.list #footer li{
    width: 5%;
    height: 100%;
    

}
button{
    position: absolute;
    left: 25%;
    bottom:7%;
    margin:10px
}
button:first-child{
    position: absolute;
    left: 20%;
    bottom:7%;
    margin:10px
}
.list #footer span{
    position: absolute;
    left: 30%;
    bottom:6%;
    margin:10px
}
</style>