import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// import ElementUI from 'element-ui';
// Vue.use(ElementUI)

// Vue.config.productionTip = false
// Vue.prototype.$bus = new Vue()
//vue2创建vue方式
// new Vue({
//     router,
//     store,
//     render: h => h(App)
// }).$mount('#app')
const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.mount('#app')