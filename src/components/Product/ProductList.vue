<template>
  <div>
    <div class="flex justify-center " >
      <a-spin v-if="DATA.length === 0" tip="Loading..." size="large"/>
    </div>
    <div class="grid grid-cols-3 gap-3 px-4">
      <ProductItem
        class="col-span-1"
        v-for="product in DATA"
        :product="product"
      />
    </div>
    <div class="flex justify-center my-9">
      <a-pagination
        v-show="DATA.length > 0"
        :pagesize="9"
        :current="1"
        :total="23"
      />
    </div>
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
