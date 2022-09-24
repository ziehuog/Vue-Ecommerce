import HomePage from '../views/HomePage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import CartPage from '../views/CartPage.vue';
import ProductDetailsPage from '../views/ProductDetailsPage.vue';
import {createWebHistory } from "vue-router";

export default {
    history: createWebHistory(),
    routes: [
        { path: "/", component: HomePage},
        { path: "/products", component: ProductsPage},
        { path: "/cart", component: CartPage},
        { path: '/product-details/:id',name: 'productDetails', component: ProductDetailsPage}
      ],
}