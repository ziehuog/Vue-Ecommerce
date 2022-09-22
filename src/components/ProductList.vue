<template>
  <div class="grid grid-cols-3 gap-3 px-4">
    <button @click="fetchData">Data</button>
        <ProductItem class="col-span-1" v-for="product in DATA" :product="product"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import ProductItem from './ProductItem.vue';
export default {
    methods: {
        ...mapActions(['fetchData'])
    },
    computed:{
        ...mapGetters(['DATA', 'uniqueCategories'])
    },
    components: { ProductItem }
};
</script>

