import axios from "axios";
import cart from "./cart/cart.js";

export default {
  modules: {
    cart: cart,
  },
    state() {
      return {
        data: [],
        categories: [],
        loading: false
      };
    },
    mutations: {
      setData(state, data) {
        state.data = data;
      },
      setCategories(state, data) {
        state.categories = data; 
      },
    },
    actions: {
      async fetchData({ commit }) {
        try {
          const data = await axios.get(
            "https://course-api.com/react-store-products"
          );
          commit("setData", data.data);
        } catch (error) {
          console.log(error);
        }
      },
      setUnique(){
        const arrCategories = this.data?.filter(
          (value, index, self) =>
              self.findIndex((item) => item.category === value.category) === index
          ).map((item) => item.category);

          commit('setCategories',arrCategories)
        // this.setCategories(arrCategories)
      // }
      }
    },
  
    getters: {
      DATA(state) {
        return state.data;
      },
    },
  }