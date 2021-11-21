const state = () => ({
  items: [],
  checkoutStatus: false
})

const getters = { //类似计算属性
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const product = rootState.products.all.find(product => product.id === id)
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity
      }
    })
  }
}

const actions = { //dispatch
  async checkout ({ commit, state }, products) {
    const savedCartItems = [...state.items]
    commit('setCheckoutStatus', null)
    // empty cart
    commit('setCartItems', { items: [] })
    try {
      await shop.buyProducts(products)
      commit('setCheckoutStatus', 'successful')
    } catch (e) {
      console.error(e)
      commit('setCheckoutStatus', 'failed')
      // rollback to the cart saved before sending the request
      commit('setCartItems', { items: savedCartItems })
    }
  },
  addStatus ({commit, state}, nums){
    // console.log(commit, state, nums)
    commit('CHANGE_STATUS', nums)
  }
}

// mutations
const mutations = { //commit
  pushProductToCart (state, { id }) {
    state.items.push({
      id,
      quantity: 1
    })
  },
  CHANGE_STATUS (state, data) {
    console.log(state, data)
    state.checkoutStatus = data
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}