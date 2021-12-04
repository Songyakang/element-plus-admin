<template>
  <div class="todolist">
    <div class="todolist_input">
      <el-space direction="horizontal" alignment="start" :size="16">
        <el-input v-model="input" placeholder="添加toodoList" />
        <el-button @click="listAdd">
          添加
        </el-button>
      </el-space>
    </div>
    <div>
      <template v-for="(item,index) in list" :key="index">
          <el-row>
            <el-col :span="18">
              {{item}}
            </el-col>
            <el-col :span="6">
              <el-icon size="16" @click="remove(item)" ><el-icon-CircleCloseFilled ></el-icon-CircleCloseFilled></el-icon>
            </el-col>
          </el-row>
      </template>
    </div>
  </div>
</template>


<script setup lang="ts">
import { reactive, toRefs } from 'vue';

type State = {
  list:string[];
  input:string
}

const state = reactive<State>({
  list:[],
  input:""
})

/**
 * 添加list
 */
const listAdd=():void=>{
    if(state.input){
      state.list.push(state.input)
      state.input = ""
    }
}

/**
 * 删除
 */
const remove=(item:string):void=>{
  state.list = state.list.filter(el=>el !== item)
}

const {input,list} = toRefs(state)
</script>

<style scoped>
  .todolist{
    width: 20vw;
  }
</style>