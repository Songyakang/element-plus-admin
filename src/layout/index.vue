<template>
  <div class="flex">
    <Layout></Layout>
    <div class="right">
      <Navbar class="navbar" name="Navbar"></Navbar>
      <div class="router-list flex-row-start-center-nowrap">
        <div
          v-for="item in routeList"
          :key="item.path"
          class="route-item flex-row-start-center-nowrap"
          @click.stop="go(item)"
        >
          <div :class="{select: tabsKey == item.path}">{{item.name}}</div>
          <el-icon class="close" @click.stop="remove(item)"><Close /></el-icon>
        </div>
      </div>
      <!-- <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        <el-breadcrumb-item>{{tabsKey}}{{breadcrumbTwo}}</el-breadcrumb-item>
      </el-breadcrumb> -->
      <div class="content">
        
        <router-view v-slot='{Component}'>
          <KeepAlive>
            <component :is='Component'></component>
          </KeepAlive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {KeepAlive, getCurrentInstance, computed, ref, onMounted, provide, inject} from 'vue'
import {useStore} from 'vuex'
import Layout from './components/layout.vue'
import Navbar from './components/Navbar.vue'
import {Close, ArrowRight} from '@element-plus/icons'
import {useRouter, useRoute} from 'vue-router'
import {routes} from '../routers/index'
const {state, dispatch} = useStore()
const location = useRouter()
const options = useRoute()
const route = state.route
// const routeList = state.route.routeList
const instance = getCurrentInstance()
let tabsKey = inject<any>('defaultActive')
onMounted(() => {
  console.log(tabsKey)
  tabsKey.value = options.path
  dispatch("user/getUserInfo")
})

const routeList = computed((e) => {
  return state.route.items
})
const breadcrumbTwo = computed((e) => {
  console.log(routes.map(e => e.name))
})
const remove = (item) => {
  dispatch('route/removeItem', item).then(e => {
    console.error(state.route)
    instance?.proxy?.$forceUpdate()
  })
}

const go = (url: any) => {
  tabsKey.value = url.path
  console.log(tabsKey.value)
  location.push(url)
}
</script>

<style lang='less' scoped>
*, body{
  padding: 0;
  margin: 0;
}
.flex{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  .right{
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    height: 100vh;
    background: #f2f2f2;
    .content{
      flex: 1;
      margin: 10px;
      padding: 10px;
      overflow-y: scroll;
      background: #fff;
      // min-height: 100%;
    }
  }
}
.breadcrumb{
  margin: 10px;
}
.router-list{
  overflow-x: hidden;
  background: #fff;
  border-top: 1px solid #f2f2f2;
  white-space: nowrap;
  width: calc(100vw - 220px);
  .route-item{
    display: inline-flex;
    position: relative;
    align-items: center;
    border: 1px solid #eee;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    .select{
      color: #409EFF;
    }
    .close{
      margin-left: 5px;
      padding: 2px;
      
      &:hover{
        background: rgba(0,0,0,0.1);
        
        border-radius: 50%;
        transition: all .5s;
      }
    }
    &:last-child{
      margin: 0;
    }
  }
}
</style>
