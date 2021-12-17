import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/

// 接口文档 https://www.apipark.cn/s/d24319c7-72d4-4607-98cf-d42b339586d9

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server:{
    proxy:{
      "/api":{
        // target:"http://82.156.175.153:7001/",
        target:"http://127.0.0.1:7001/",
        changeOrigin:false,
        secure: true,
        rewrite: path => path.replace('/api', '/api')
      }
    }
  }
})
