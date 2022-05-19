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
        component: () =>
            import ('views/user/user.vue'),
        children: [{
            path: "/user/index",
            components: {
                rv_maintain: () =>
                    import ('views/maintain/manage/index.vue'),
            }
        }]
    },
    {
        path: '/manage',
        name: 'manage',
        component: () =>
            import ('views/manage/manage.vue'),
        children: [{
            path: "/manage/index",
            components: {
                rv_maintain: () =>
                    import ('views/maintain/manage/index.vue'),
            }
        }]
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