import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from 'vuex'
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//   },
//   getters: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
export default createStore({
    state: {
        username: sessionStorage.getItem("username"),
        ismanage: sessionStorage.getItem("ismanage")
    },
    getters: {},
    mutations: {
        setusername(store, data) {
            this.state.username = data.username
            this.state.ismanage = data.ismanage
            sessionStorage.setItem('username', data.username)
            sessionStorage.setItem('ismanage', data.ismanage)
        }
    },
    actions: {},
    modules: {}
})