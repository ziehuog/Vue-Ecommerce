<template>
  <div>
    <div class="grid grid-cols-3 gap-3 px-4">
      <ProductItem
        class="col-span-1"
        v-for="product in DATA"
        :product="product"
      />
    </div>
    <a-pagination :pagesize="9" :current="1" :total="23"></a-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductItem from "./ProductItem.vue";
export default {
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters(["DATA", "uniqueCategories"]),
  },
  components: { ProductItem },
};
</script>
