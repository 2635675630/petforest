import Vue from 'vue'
// import VueRouter from 'vue-router'
import { createRouter, createWebHashHistory } from "vue-router"
// Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('views/login/login.vue')
    },
    {
        path: '/user',
        name: 'user',
        redirect: '/user/index',
        component: () =>
            import ('views/user/user.vue'),
        children: [{
                path: "/user/index",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/index/index.vue'),
                }
            },
            {
                path: "/user/submit_order",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/order/submit_order.vue'),
                }
            },
            {
                path: "/user/submit_preorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/order/show_preorder.vue'),
                }
            },
            {
                path: "/user/show_ordering",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/order/show_ordering.vue'),
                }
            },
            {
                path: "/user/show_ordered",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/order/show_ordered.vue'),
                }
            },
            {
                path: "/user/show_petstatus",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/petstatus/show_petstatus.vue'),
                }
            },
            {
                path: "/user/show_notice",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/notice/show_notice.vue'),
                }
            },
            {
                path: "/user/submit_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/sorder/submit_sorder.vue'),
                }
            },
            {
                path: "/user/show_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/sorder/show_sorder.vue'),
                }
            },
            {
                path: "/user/show_sordered",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/user/sorder/show_sordered.vue'),
                }
            },
        ]
    },
    {
        path: '/manage',
        redirect: '/manage/index',
        name: 'manage',
        component: () =>
            import ('views/manage/manage.vue'),
        children: [{
                path: "/manage/index",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/index/index.vue'),
                }
            },
            {
                path: "/manage/add_manage",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/usermanage/adduser.vue'),
                }
            },
            {
                path: "/manage/delete_manage",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/usermanage/deletemanage.vue'),
                }
            },
            {
                path: "/manage/delete_user",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/usermanage/deleteuser.vue'),
                }
            },
            {
                path: "/manage/submit_preorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/submit_preorder.vue'),
                }
            },
            {
                path: "/manage/show_preorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/show_preorder.vue'),
                }
            },
            {
                path: "/manage/show_rpreorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/show_rpreorder.vue'),
                }
            },
            {
                path: "/manage/show_ordering",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/show_ordering'),
                }
            },
            {
                path: "/manage/show_ordered",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/show_ordered'),
                }
            },
            {
                path: "/manage/show_rordered",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/order/show_rordered'),
                }
            },
            {
                path: "/manage/show_petstatus",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/petstatus/show_petstatus'),
                }
            },
            {
                path: "/manage/submit_cage",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/cage/submit_cage'),
                }
            },
            {
                path: "/manage/show_cagenum",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/cage/show_cagenum.vue'),
                }
            },
            {
                path: "/manage/show_petstatus",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/petstatus/show_petstatus'),
                }
            },
            {
                path: "/manage/submit_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/sorder/submit_sorder'),
                }
            },
            {
                path: "/manage/alter_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/sorder/alter_sorder'),
                }
            },
            {
                path: "/manage/delete_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/sorder/delete_sorder'),
                }
            },
            {
                path: "/manage/show_sorder",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/sorder/show_sorder'),
                }
            },
            {
                path: "/manage/show_sordered",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/sorder/show_sordered'),
                }
            },
            {
                path: "/manage/submit_notice",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/notice/submit_notice'),
                }
            },
            {
                path: "/manage/show_notice",
                components: {
                    rv_maintain: () =>
                        import ('views/maintain/manage/notice/show_notice'),
                }
            },
        ]
    },

]
export const router = createRouter({
        history: createWebHashHistory(),
        routes: routes,
    })
    // const router = new VueRouter({
    //     mode: 'hash',
    //     // base: process.env.BASE_URL,
    //     base: './',
    //     routes
    // })

// export default router