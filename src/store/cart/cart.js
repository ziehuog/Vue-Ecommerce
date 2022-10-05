import cartMutation from './mutations.js'
import CartActions from './actions.js'
import CartGetters from './getters.js'


export default {
  namespaced: true,
  state() {
    return {
      cartStore: [],
      quantity: 0
    };
  },
  mutations: cartMutation,
  actions: CartActions,
  getters: CartGetters
};
