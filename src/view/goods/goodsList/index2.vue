<template>
  <button @click="addCount">ct is: {{ count }}</button>2222
</template>

<script setup lang="ts">
import {ref, defineComponent } from 'vue'

let count = ref<number>(0)
const addCount = ():void => {
  count.value++
}
</script>

<style lang='less' scoped>
</style>
