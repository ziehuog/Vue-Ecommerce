import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import "../style.css";
import Antd from 'ant-design-vue';
import indexStore from './store/indexStore.js'
import 'ant-design-vue/dist/antd.css';
import { createRouter } from "vue-router";
import indexRouter from './router/indexRouter.js'


const app = createApp(App);

const store = createStore(indexStore);
app.use(store);

const router = createRouter(indexRouter)
app.use(router)
app.use(Antd).mount('#app');