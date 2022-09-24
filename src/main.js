import { createApp } from "vue";
import App from "./App.vue";
//style
import "../style.css";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
//store
import { createStore } from "vuex";
import indexStore from './store/indexStore.js'
//router
import { createRouter } from "vue-router";
import indexRouter from './router/indexRouter.js'
//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCartArrowDown, faCartPlus,  faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//
const app = createApp(App);

//store
const store = createStore(indexStore);
app.use(store);

//router
const router = createRouter(indexRouter)
app.use(router)

//icon
library.add(faCartPlus, faCartArrowDown, faMagnifyingGlass)

//style
app.use(Antd).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
