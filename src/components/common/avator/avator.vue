<template>
  <div class="avator">
      <div class="img"><img :src="require('assets/img/'+userimg+'.png')" alt=""></div>
      <div class="username"><span>username</span></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username:null
        }
    },
    props:{
        userimg:{}
    }
}
</script>

<style scoped>
.avator{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.avator .img{
    height: 90%;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.avator .img img{
    width: 50%;
    height: 70%;
    border-radius: 50%;
    box-shadow: 0 0 2px 2px rgba(0,0,0,0.3);
}
.avator .username{
   height: 10%;
    width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
</style>