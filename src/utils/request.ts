import axios from 'axios'
import router from '../routers/index'
import { ElMessage  } from 'element-plus'

const http = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

//  设置响应拦截器
http.interceptors.response.use((res) => {
  if (res.data.code === 401) {
    router.push({ path: '/user/login' })
  } else if (res.data.code === 0) {
    return res.data
  } else {
    ElMessage({
      showClose: true,
      message: res.data.msg,
      type: 'error'
    })
    return Promise.reject(res.data)
  }
}, function (error) {
  let status = error.response.status;
  if(status == 401){
    ElMessage({
      showClose: true,
      message: error.response.data.msg,
      type: 'error'
    })
    router.push({ path: '/user/login' })
  }
  return Promise.reject(error)
})

//  设置请求拦截器
http.interceptors.request.use((config) => {
  return config
}, function (error) {
  return Promise.reject(error)
})

export default http
