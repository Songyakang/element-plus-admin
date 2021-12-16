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
  if (Object.hasOwnProperty.call(res.headers, 'token')) {
    localStorage.token = res.headers.token
  }
  if (res.data.code === 401) {
    router.push({ path: '/login' })
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
  return Promise.reject(error)
})

//  设置请求拦截器
http.interceptors.request.use((config) => {
  if (config.url != '/admin/login') {
    config.headers.token = localStorage.token //将token写入请求头内
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default http
