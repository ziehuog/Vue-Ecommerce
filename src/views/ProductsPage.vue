<template>
  <div class="container mx-auto">
    <PathPage />
    <div class="grid grid-cols-4 gap-3 mt-3">
        <div class="col-span-1">
            <Filter :product="listProduct"/>
        </div>
        <div class="col-span-3">
            <Sort :product="listProduct"/>
            <ProductList/>
        </div>
    </div>
  </div>
</template>

<script>
import PathPage from "../components/PathPage.vue";
import Filter from "../components/Filter.vue";
import Sort from "../components/Sort.vue";
import ProductList from "../components/ProductList.vue";
export default {
  components: { PathPage, Filter, Sort, ProductList },
  data() {
        return {
            listProduct: [],
        };
    },
    methods: {
        fetchProduct() {
            fetch("https://course-api.com/react-store-products")
                .then((response) => response.json())
                .then((data) => this.listProduct = data)
                .catch((err) => console.error(err));
        },
        log(){
            console.log(this.listProduct)
        }
    },
    mounted() {
        this.fetchProduct();
    },
};
</script>

