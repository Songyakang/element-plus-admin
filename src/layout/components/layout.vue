<template>
  <div class="area">
    <div class="left">
      <div class="menu-area">
        <el-menu  :unique-opened='true' :collapse="isCollapse">
          <template v-for="item in routerList" :key="item.path">
            <el-sub-menu :index="item.name" v-if='item.children?.length'>
              <template #title>
                <i class="el-icon-message"></i>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group title="111">
                <el-menu-item 
                  v-for="(ch, ci) in item.children" 
                  @click="toUrl(ch.path)" 
                  :key="ci" 
                  :index='ch.path'
                >{{ch.name}}</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-menu-item v-else @click="toUrl(item.path)">
              <i class="el-icon-message"></i>
              <span>{{item.name}}{{item.children?.length || 0}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router"
import { ref, defineComponent } from "vue"
import {routes} from "../../routers/index"

const routerList = routes.filter(e => e.name)
let routerPath = useRoute().path
let isCollapse = ref<boolean>(false)
const localtion = useRouter()
const toUrl = (url: string) => {
  console.log(url )
  localtion.push({path: url})
}

</script>
<style lang="less" scoped>
.area {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  overflow: hidden;
  .left {
    height: 100vh;
    overflow: hidden;
    width: 220px;
    .menu-area {
      border-right: 1px solid #f2f2f2;
      .el-menu {
        min-height: 100vh;
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
