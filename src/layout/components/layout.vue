<template>
  <div class="area">
    <div :class="{left: !isCollapse, smLeft: isCollapse}">
    <!-- <div class="left"> -->
      <div class="menu-area">
        <el-menu  
          :unique-opened='true' 
          :collapse="isCollapse" 
          :defaultOpeneds='defaultOpened'
          :defaultActive='defaultActive'
          @open='onOpen'
          @close='onClose'
        >
          <template v-for="item in routerList" :key="item.path">
            <el-sub-menu :index="item.name" v-if='item.children?.length'>
              <template #title>
                <el-icon>
                  <component :is='`el-icon-${item.icon}`'></component>
                </el-icon>
                <!-- <el-icon><location /></el-icon> -->
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item 
                  v-for="(ch, ci) in item.children" 
                  @click="toUrl(ch)" 
                  :key="ci" 
                  :index='ch.path'
                  :data-index='ch.name'
                >{{ch.name}}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item v-else @click="toUrl(item)">
              <el-icon><IconPark :type='item.icon' size="16"></IconPark></el-icon>
              <template><span>{{item.name}}{{item.children?.length || 0}}</span></template>
            </el-menu-item>
          </template>
        </el-menu>
        
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute, RouteRecordRaw } from "vue-router"
import {IconPark} from '@icon-park/vue-next/es/all'
import {Location, Setting} from '@element-plus/icons'
import { ref, defineComponent, onMounted, inject } from "vue"
import {useStore} from 'vuex'
import {routes} from "../../routers/index"
const {state, dispatch} = useStore()
const routerList = routes.filter(e => e.name)
const isCollapse = inject('isCollapse', false)
const localtion = useRouter()
const icon = ref()
let defaultActive = inject<any>('defaultActive')
let defaultOpened = inject<any>('defaultOpened')
if(localStorage.hasOwnProperty('layoutDefaultOpened')){
  defaultOpened.value = JSON.parse(localStorage.layoutDefaultOpened)
}
if(localStorage.hasOwnProperty('layoutDefaultActive')){
  defaultActive.value = localStorage.layoutDefaultActive
}
onMounted(() => {
  
})
const toUrl = (url: RouteRecordRaw) => {
  localtion.push({path: url.path})
  localStorage.setItem('layoutDefaultActive', url.path)
  defaultActive.value = url.path
  dispatch('route/addView', url)
}

const onOpen = (e: string) => {
  defaultOpened.value = [e]
  localStorage.setItem('layoutDefaultOpened', JSON.stringify([e]))
  console.log(e)
}
const onClose = () => {
  console.log()
  icon.value = icon.value.$el.children[0]
  localStorage.setItem('layoutDefaultOpened', JSON.stringify([]))
}
</script>
<style lang="less" scoped>
.area {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  overflow: hidden;
  .smLeft{
    width: 64px;
    height: 100vh;
    overflow: hidden;
    transition: all .2s;
    .menu-area{
      border-color: #fff;
      border-width: 0px;
      transition: all 1.5s;
    }
  }
  .left {
    height: 100vh;
    overflow: hidden;
    width: 220px;
    transition: all .2s;
    .menu-area {
      // border-right: 1px solid #f2f2f2;
      // transition: all 1.5s;
      .el-menu {
        min-height: 100vh;
        border-width: 0;
        .el-menu-item{
          font-size: 12px;
        }
      }
    }
  }
  .right {
    flex: 1;
    height: 100vh;
    box-sizing: border-box;
  }
}
</style>
