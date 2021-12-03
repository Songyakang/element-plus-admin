<template>
  <el-breadcrumb>
    <el-breadcrumb-item>高级表格</el-breadcrumb-item>
  </el-breadcrumb>
  <div class="content flex-row-start-start-nowrap">
    <div class="preView">
      <ProTable :table-headers="tableHeaders" :name='formData.name'></ProTable>
      <el-form inline ref="willData">
        <el-form-item label="标签名">
          <el-input v-model="willFormData.label"></el-input>
        </el-form-item>
        <el-form-item label="对应的key">
          <el-input v-model="willFormData.key"></el-input>
        </el-form-item>
        <el-form-item label="表单类型">
          <el-select v-model="willFormData.type">
            <el-option label="输入框" value="input"></el-option>
            <el-option label="选择框" value="select"></el-option>
            <el-option label="时间选择框" value="date"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="formListAppend">新增搜索项</el-button>
        </el-form-item>
      </el-form>
      <el-form inline='true' :label-width="formData.setting.labelWidth">
        <template v-for="item in formData.list" :key='item.key'>
          <el-form-item :label="item.label">
            <el-input :size="formData.setting.size" v-model='item.value' v-if="item.type == 'input'"></el-input> <!--输入框-->
            <el-select :size="formData.setting.size" v-model="item.value" v-else-if="item.type == 'select'"> <!--选择框-->
              <el-option 
                v-for='opt in item.selectList' 
                :key='opt.value' 
                :label='opt.name' 
                :value="opt.value"
              ></el-option>
            </el-select>
            <el-date-picker :size="formData.setting.size" v-else-if="item.type === 'date'" v-model="item.value"></el-date-picker>
          </el-form-item>
        </template>
      </el-form>
    </div>
    <div class="editArea">
      <el-tabs type="border-card">
        <el-tab-pane label="表单设置">
          <div class="form-item">
            <div class="label">label宽度</div>
            <el-input class="input" v-model="formData.setting.labelWidth" size="mini"></el-input>
          </div> 
          <div class="form-item">
            <div class="label">控件大小</div>
            <el-select class="input" size="mini" v-model="formData.setting.size"> 
              <el-option key='medium' label='中等' value="medium"></el-option>
              <el-option key='small' label='小号' value="small"></el-option>
              <el-option key='mini' label='迷你' value="mini"></el-option>
            </el-select>
          </div> 
        </el-tab-pane>
        <el-tab-pane label="表格设置">Config</el-tab-pane>
        <el-tab-pane label="分页设置">Role</el-tab-pane>
        <el-tab-pane label="基本设置">Task</el-tab-pane>
        <el-tab-pane label="源码展示">{{formData}}</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, defineComponent, computed } from 'vue'
import {ElMessage } from 'element-plus'
import ProTable from '../../components/ProTable/index.vue'
type WillFormData = {
  label: string,
  type: string,
  value: string,
  key: string,
  selectList?: {value: string, name: string}[]
}
const tableHeaders = reactive([])
const willFormData: WillFormData = reactive({
  label: '',
  type: '',
  value: '',
  key: '',
  selectList: [{value: '', name: ''}]
})
const formData: {
  setting: {
    labelWidth: string
    size: string
  }
  list:WillFormData[]
} = reactive({
  setting: {
    labelWidth: '120px',
    size: 'medium'
  },
  list: [{
    label: '姓名',
    type: 'input',
    value: '',
    key: 'name',
    selectList: []
  }]
})
const willData = ref(null)

const formListAppend = () => {
  if(formData.list.find((e: WillFormData) => e.key === willFormData.key)){
    ElMessage.error('key值不能重复')
    return
  }
  formData.list.push(willFormData)
}
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

.form-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  &:first-child{
    margin-top: 0;
  }
  .label{
    font-size: 12px;
  }
  .input{
    flex: 1;
    max-width: 60%;
    text-align: right;
  }
}
</style>
