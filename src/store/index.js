import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
    cart(state) {
      return state.cart
    },
    cartTotal(state) {
      return state.cart.reduce((total, product) => total + product.cost, 0)
    }
  },
  mutations: {
    addToCart(state, order) {
      state.cart.push(order)
    }
  },
  actions: {
    addOrder({ commit }, orders) {
      commit('addToCart', orders)
    }
  },
  modules: {
  }
})
