<template>
  {{state.user.checkoutStatus}} 
  <button @click="changeState">click</button>
  <input type='file' @change="uploadFile">
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

const uploadFile = (e) => {
  const file = e.target.files[0]
  const Reader = new FileReader()
  Reader.readAsArrayBuffer(file)
  Reader.onload = () => {
    const blob = new Blob([Reader.result], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"})
    // location.href = window.URL.createObjectURL(blob)
    window.open(window.URL.createObjectURL(blob))
  }
  
}
</script>

<style lang='less' scoped>
button{
  width: 100%;
  margin: 20px 0;
}
</style>
