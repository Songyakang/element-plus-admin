import { createApp } from 'vue'
import * as ICON from '@element-plus/icons'
import App from './App.vue'
import router from './routers'
import ElementPlus from 'element-plus'
import Vuex from './store'
import 'element-plus/dist/index.css'
import '@icon-park/vue-next/styles/index.css'
console.log(ICON)

const app = createApp(App)
for(let i in ICON){
  app.component(`el-icon-${i}`, ICON[i])
}
app.use(router)
app.use(ElementPlus)
app.use(Vuex)
app.mount('#app')
