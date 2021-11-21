import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus'
import Vuex from './store'
import 'element-plus/dist/index.css'
console.log(router)

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Vuex)
app.mount('#app')
