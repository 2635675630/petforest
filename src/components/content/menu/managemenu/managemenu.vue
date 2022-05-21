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
                    <el-menu-item index="/manage/index" >首页</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="2" :title="账户管理">
                    <template #title>
                        <el-icon><img src="~/assets/img/像素_猫.png" alt=""></el-icon>
                        <span>账户管理</span>
                    </template>
                    <el-menu-item index="/manage/add_manage">添加管理员</el-menu-item>
                    <el-menu-item index="/manage/delete_manage">删除管理员</el-menu-item>
                    <el-menu-item index="/manage/delete_user">用户注销</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="3" :title="宠物寄养">
                    <template #title>
                        <el-icon><img src="~/assets/img/像素_兔子.png" alt=""></el-icon>
                        <span>宠物寄养</span>
                    </template>
                    <el-menu-item index="/manage/submit_preorder">添加预约订单</el-menu-item>
                    <el-menu-item index="/manage/show_preorder">待处理预约订单</el-menu-item>
                    <el-menu-item index="/manage/show_rpreorder">已接受预约订单</el-menu-item>
                    <el-menu-item index="/manage/show_ordering">查看进行中订单</el-menu-item>
                    <el-menu-item index="/manage/show_ordered">查看所有历史订单</el-menu-item>
                    <el-menu-item index="/manage/show_rordered">按条件查询历史订单</el-menu-item>
                </el-sub-menu>

                 <el-sub-menu index="4" :title="宠物状态">
                    <template #title>
                        <el-icon><img src="~/assets/img/猫.png" alt=""></el-icon>
                        <span>宠物状态</span>
                    </template>
                    <el-menu-item index="/manage/show_petstatus">查看宠物状态</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="5" :title="笼子管理">
                    <template #title>
                        <el-icon><img src="~/assets/img/宠物(1).png" alt=""></el-icon>
                        <span>笼子管理</span>
                    </template>
                    <el-menu-item index="/manage/submit_cage">设置笼子数量</el-menu-item>
                    <el-menu-item index="/manage/show_cagenum">查询笼子数量</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="6" :title="服务套餐">
                    <template #title>
                        <el-icon><img src="~/assets/img/宠物.png" alt=""></el-icon>
                        <span>服务套餐</span>
                    </template>
                    <el-menu-item index="/manage/submit_sorder">添加服务套餐</el-menu-item>
                    <el-menu-item index="/manage/alter_sorder">修改套餐数量</el-menu-item>
                    <el-menu-item index="/manage/delete_sorder">删除服务套餐</el-menu-item>
                    <el-menu-item index="/manage/show_sorder">查看已购套餐</el-menu-item>
                    <el-menu-item index="/manage/show_sordered">查看历史套餐</el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="7" :title="公告管理">
                    <template #title>
                        <el-icon><img src="~/assets/img/猫爪.png" alt=""></el-icon>
                        <span>公告管理</span>
                    </template>
                    <el-menu-item index="/manage/submit_notice">发布公告</el-menu-item>
                    <el-menu-item index="/manage/show_notice">查询公告</el-menu-item>
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