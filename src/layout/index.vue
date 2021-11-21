<template>
  <div class="flex">
    <Layout></Layout>
    <div class="right">
      <Navbar class="navbar" name="Navbar"></Navbar>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Layout from './components/layout.vue'
import Navbar from './components/Navbar.vue'

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
