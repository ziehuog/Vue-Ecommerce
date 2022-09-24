import cartMutation from './mutations.js'


export default {
  state() {
    return {
      cartStore: [],
    };
  },
  mutations: cartMutation
};
