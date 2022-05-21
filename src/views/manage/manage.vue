<template>
  <div class="manage">
    <div class="maintain">
      <!-- 侧边栏 -->
      <div class="sider">
        <!-- 头像 -->
        <div class="sider_avator">
          <avator  :userimg="'headerimg'"></avator>
        </div>
        <!-- 菜单 -->
        <div class="sider_slider">
          <ManageMenu></ManageMenu>
        </div>
      </div>

      <!-- 主体内容 -->
      <div class="section">
          <router-view name="rv_maintain"></router-view>
        
      </div>
    </div>
  </div>
</template>
<script>
import Avator from 'components/common/avator/avator.vue'
import ManageMenu from 'components/content/menu/managemenu/managemenu.vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  components:{
    Avator,
    ManageMenu,
  },
    beforeRouteEnter(to, from, next ){
        if(sessionStorage.getItem('ismanage')!="1"){
          next(false)
        }
        else{
          next()
        }
    }
}
</script>


<style scoped>
.manage{
  width: 100vw;
  height: 100vh;
   background: linear-gradient(to right, #f05053, #e1eec3);
}
.maintain{
  position: relative;
  top: 5vh;
  left: 5vw;
  height: 90vh;
  width: 90vw;
  border-radius: 20px;
  box-shadow: 2px 2px 8px 5px rgb(0, 0, 0,0.3) ;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.sider{
  flex:1.2;
  flex-grow: 1.2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.sider_avator{
  width: 100%;
  height: 20%;
  
}
.sider_slider{
  width: 100%;
  height: 80%;
}
.section{
  flex: 5;
  flex-grow: 5;
}
</style>