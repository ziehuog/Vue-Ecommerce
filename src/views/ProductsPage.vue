<template>
  <div class="container mx-auto">
    <PathPage />
    <div class="grid grid-cols-4 gap-3 mt-3">
      <div class="col-span-1">
        <Filter />
      </div>
      <div class="col-span-3">
        <Sort />
        <ProductList />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import PathPage from "../components/PathPage.vue";
import Filter from "../components/Filter.vue";
import Sort from "../components/Sort.vue";
import ProductList from "../components/ProductList.vue";
export default {
  components: { PathPage, Filter, Sort, ProductList },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(['setCategories']),
    fetchProduct() {
      this.fetchData();
      this.setCategories();
      
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
