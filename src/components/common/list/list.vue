<template>
  <div class="list">
      <ul id="head">
          <li v-for="(item,index) in type_num" :key="index">{{item}}</li>
      </ul>
      <ul v-for="(items,index) in datalist" :key="index" >
            <li v-for="(item,index) in items" :key="index">{{item}}</li>
            <li ><slot name="a" :index="items"></slot></li>
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
import Adduser from '@/views/maintain/manage/usermanage/adduser.vue';
import { ElMessage } from 'element-plus'
export default {
    setup(props,context) {
        let datalist = reactive([])
        let currentpage=reactive({page:1})
        let tolltaltpage=reactive({page:null})
        function nextpage(){
            //当前页不等于总页数即进行下一页操作
            if(this.currentpage.page!=this.tolltaltpage.page){
                this.currentpage.page+=1
                this.datalist=[]
            if(this.currentpage.page==this.tolltaltpage.page){
                for(let i=(this.currentpage.page-1)*10;i<props.alldata.length;i++){
                    console.log(props.alldata[i])
                this.datalist.push(props.alldata[i])
                }
            }
            else{
                for(let i=0;i<10;i++){
                this.datalist.push(props.alldata[i+(this.currentpage.page-1)*10])
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
                for(let i=(this.currentpage.page-1)*10;i<(this.currentpage.page-1)*10+10;i++){
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
            datalist,currentpage,tolltaltpage,nextpage,prepage
        };
    },
    props: {
        type_num: {
            type: Array
        },
        alldata: {
            type: Array
        }
    },
    mounted() {
            for (let i = 0; i<this.alldata.length&&i < 10; i++) {
            this.datalist.push(this.alldata[i]);
        }
        this.tolltaltpage.page=Math.ceil(this.alldata.length/10)
    },
    components: { Adduser }
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
    left: 13%;
    bottom:7%;
    margin:10px
}
button:first-child{
    position: absolute;
    left: 5%;
    bottom:7%;
    margin:10px
}
.list #footer span{
    position: absolute;
    left: 21%;
    bottom:6%;
    margin:10px
}
</style>