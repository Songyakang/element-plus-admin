<template>
  {{state.user.checkoutStatus}} 
  <button @click="changeState">click</button>
  <input>
</template>

<script setup lang="ts">
import {ref, defineComponent, computed } from 'vue'
import {useStore} from 'vuex'
let count = ref<number>(0)
const {state, dispatch} = useStore()

console.log(state.user)

const addCount = ():void => {
  count.value++
}

const changeState = ():void => {
  dispatch('user/addStatus', !state.user.checkoutStatus)
}
</script>

<style lang='less' scoped>
button{
  width: 100%;
  margin: 20px 0;
}
</style>
