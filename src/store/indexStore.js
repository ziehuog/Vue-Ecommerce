import axios from "axios";

export default {
    state() {
      return {
        data: [],
        categories: []
      };
    },
    mutations: {
      setData(state, data) {
        state.data = data;
      },
      setCategories(state) {
        state.categories = this.DATA?.filter(
          (value, index, self) =>
            self.findIndex((item) => item.category === value.category) === index
        ).map((item) => item.category);
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
    },
  
    getters: {
      DATA(state) {
        return state.data;
      },
    },
  }