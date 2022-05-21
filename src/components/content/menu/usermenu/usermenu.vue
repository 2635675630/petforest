<template>
  <div class="nav" id="nav">
            <el-menu
        default-active="/keng"
        class="el-menu-demo"
        mode="vertical"
        background-color="rgba(0,0,0,0)"
        text-color="black"
        active-text-color="#ffd04b"
        unique-opened
        router  
        >       <el-sub-menu index="1" :title="首页">
                    <template #title>
                        <el-icon><img src="~/assets/img/狗窝.png" alt=""></el-icon>
                        <span>首页</span>
                    </template>
                    <el-menu-item index="/user/index" >首页</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2" :title="宠物寄养">
                    <template #title>
                        <el-icon><img src="~/assets/img/像素_猫.png" alt=""></el-icon>
                        <span>宠物寄养</span>
                    </template>
                    <el-menu-item index="/user/submit_order" >提交预约订单</el-menu-item>
                    <el-menu-item index="/user/show_preorder">查看预约订单</el-menu-item>
                    <el-menu-item index="/user/show_ordering">查看进行中订单</el-menu-item>
                    <el-menu-item index="/user/show_ordered">查看历史订单</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="3" :title="宠物状态">
                    <template #title>
                        <el-icon><img src="~/assets/img/像素_兔子.png" alt=""></el-icon>
                        <span>宠物状态</span>
                    </template>
                    <el-menu-item index="/user/show_petstatus">查看宠物状态</el-menu-item>
                </el-sub-menu>

                 <el-sub-menu index="4" :title="查看公告">
                    <template #title>
                        <el-icon><img src="~/assets/img/猫.png" alt=""></el-icon>
                        <span>查看公告</span>
                    </template>
                    <el-menu-item index="/user/show_notice">查看公告</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="5" :title="服务套餐">
                    <template #title>
                        <el-icon><img src="~/assets/img/猫碗.png" alt=""></el-icon>
                        <span>服务套餐</span>
                    </template>
                    <el-menu-item index="/user/submit_sorder">选购服务套餐</el-menu-item>
                    <el-menu-item index="/user/show_sorder">查看已购套餐</el-menu-item>
                    <el-menu-item index="/user/show_sordered">查看历史套餐</el-menu-item>
                </el-sub-menu>

            </el-menu>
  </div>
  
</template>

<script>
export default {
}
</script>

<style scoped>
.nav{
    width: 100%;
    height: 100%;
    overflow-x: hidden; /*禁止横向的滚动条*/
    overflow-y: auto; 
    font-size: 20px;
}
#nav span{
    font-size: 20px;
    text-align: center;
}
#nav div{
    text-align: center;
}
#nav ul{
    border: none;
}
.nav::-webkit-scrollbar {
    display:none;
}
img{
    height: 100%;
    width: 100%;
}
</style>