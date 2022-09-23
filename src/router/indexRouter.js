import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import ProductDetailsPage from '../views/ProductDetailsPage.vue';
import {createWebHistory } from "vue-router";

export default {
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage},
        { path: "/products", component: ProductsPage},
        { path: '/product-details/:id',name: 'productDetails', component: ProductDetailsPage}
      ],
}