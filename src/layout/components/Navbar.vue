<template>
  <div class="container">
    <div class="proName">{{ appName }}</div>
    <div class="procontainer">
      <div class="setting">
        <div class="versions">
          <el-button
            type="primary"
            plain
            size="mini"
            style="padding: 4px 6px;"
            @click="go('/upgrade')"
          >一键更新</el-button>
          <el-button
            type="primary"
            plain
            size="mini"
            style="padding: 4px 6px;"
            @click="cleanCache"
          >清理缓存</el-button>
        </div>
        <div
          style="line-height: 0px;font-size: 24px;margin-right:15px;cursor:pointer"
        >
          <el-badge v-if="order.length > 0" is-dot class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
            <el-badge  v-if="order.length == 0" >
            <i class="el-icon-bell"></i>
          </el-badge>
        </div>
        <div>
          <!-- <svg-icon icon-class="morentouxiang" style="font-size:25px;position: relative;top:3px" /> -->
          <el-dropdown @command="handleCommand">
            <span style="cursor: pointer;">
              {{ name }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="1">基本资料</el-dropdown-item>
                <el-dropdown-item :command="3">选择应用</el-dropdown-item>
                <el-dropdown-item :command="4" divided>退 出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import {ref} from 'vue'
export default{
  setup(){
    const order = ref<[]>([])
    const appName = ref<string>('卷跑')
    const name = ref<string>('name')
    const go = (url: string):void => {
      console.log(url)
    }
    const handleCommand = (e: any):void => {
      console.log(e)
    }
    const cleanCache = (e: any):void => {
      console.log(e)
    }
    return {
      order,
      appName,
      name,
      go,
      handleCommand,
      cleanCache
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px 15px;
  color: rgb(60, 60, 60);
  background: #fff;
}
.proName {
  float: left;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
}
.procontainer {
  float: right;
  width: 400px;
  font-size: 14px;
  div {
    display: inline-block;
  }
}
.help {
  float: left;
  cursor: pointer;
  div {
    display: inline-block;
  }
  &:active {
    color: cornflowerblue;
  }
}
.setting {
  float: right;
  padding: 0 40px 0 0;
  div {
    display: inline-block;
  }
}
.versions {
  margin: 0 15px;
}
</style>
