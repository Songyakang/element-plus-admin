import {StoreOptions} from 'vuex'
type State = {
  items: {
    name: string
    path: string
    query: string
  }[]
  nums: number
}

type Item = {
  name: string
  path: string
  query: string
}
let state:State = {
  items: localStorage.hasOwnProperty('admin_route_history') ? JSON.parse(localStorage.admin_route_history) : [],
  nums: 0
}


const getters = { //类似计算属性
}

// mutations
const mutations = { //commit
  PUSH (state: State, data: Item) {
    state.nums += 1
    state.items.push(data)
    localStorage.setItem('admin_route_history', JSON.stringify(state.items))
  },
  REMOVE_ITEM(state: State, {path}: Item) {
    state.nums += 1
    state.items = state.items.filter(e => e.path != path)
    localStorage.setItem('admin_route_history', JSON.stringify(state.items))
  }
}

const actions = { //dispatch
  addView ({commit, state}, {name,path, query={}}){ //添加数据
    console.log(state.items)
    if(!state.items.find((e:Item) => e.name === name)){
      commit('PUSH', {name,path,query})
    }
  },
  removeItem({commit, state}, item){
    commit('REMOVE_ITEM', item)
  }
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}