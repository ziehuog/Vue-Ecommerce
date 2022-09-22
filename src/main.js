import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import axios from "axios"
import "../style.css";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      data: [],
    };
  },
  mutations: {
    setData(state, data) {
      state.data = data
  }
},
  actions: {
    async fetchData({ commit }) {
        try {
          const data = await axios.get('https://course-api.com/react-store-products')
            commit('setData', data.data)
          }
          catch (error) {
              alert(error)
              console.log(error)
          }
      }
  },
  
//   actions: {
//     fetchData() {
//       fetch("https://course-api.com/react-store-products")
//         .then((response) => response.json())
//         .then((data) => (this.DATA = data))
//         .catch((err) => console.error(err));
//     },
//   },
  getters: {
    DATA(state){
        return state.data
    },
    uniqueCategories(state){
        const uniqueCategory =  state.data?.filter((item, index, thisArr) => {
            thisArr.findIndex(value => item.category === value.category) === index
        }).map(item => item.category)
        return uniqueCategory
    }
  }
});
// app.use(router)
app.use(store);
app.mount("#app");
