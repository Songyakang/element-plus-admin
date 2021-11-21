<template>
  <router-view ></router-view>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import router from './routers'
const routerPath = useRoute().path
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
    }
  }
}
</style>
