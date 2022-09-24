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
//component
import PathPage from "../components/PathPage.vue";
import Filter from "../components/Product/Filter.vue";
import Sort from "../components/Product/Sort.vue";
import ProductList from "../components/Product/ProductList.vue";

export default {
  components: { PathPage, Filter, Sort, ProductList },
  computed: {
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(['setCategories']),
    
    //fetch data
    fetchProduct() {
      this.fetchData();
      // this.setCategories();
      
    },
    setUnique(){
      const arrCategories = this.data?.filter(
        (value, index, self) =>
            self.findIndex((item) => item.category === value.category) === index
        ).map((item) => item.category);
      this.setCategories(arrCategories)
    }

  },
  mounted() {
    this.fetchProduct();
    this.setUnique()
  },
};
</script>
