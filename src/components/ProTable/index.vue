<template>
  <el-breadcrumb>
    <el-breadcrumb-item>高级表格</el-breadcrumb-item>
  </el-breadcrumb>
  <div>{{name}}</div>
</template>

<script setup lang="ts">
import {ref, reactive, defineComponent, computed, defineProps } from 'vue'

const props = defineProps({
  tableHeaders: {
    type: Array
  },
  name: {
    type: String,
    default: 'iiii'
  }
})
</script>

<style lang='less' scoped>
button{
  width: 100%;
  margin: 20px 0;
}
.content{
  display: flex;
  .preView{
    flex: 1;
  }
  .editArea{
    width: 500px;
  }
}
</style>
