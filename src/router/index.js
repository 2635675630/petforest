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
            import ('views/user/user.vue')
    },
    {
        path: '/manage',
        name: 'manage',
        component: () =>
            import ('views/manage/manage.vue')
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