<template>
  111111
</template>

<script setup lang="ts">
import {ref, defineComponent } from 'vue'

let count = ref<number>(0)
const addCount = ():void => {
  count.value++
}
</script>

<style lang='less' scoped>
button{
  width: 100%;
  margin: 20px 0;
}
</style>
