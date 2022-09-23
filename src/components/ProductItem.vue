<template>
  <div class="px-3 mt-[15px]">
    <div class="w-full relative">
      <img
        class="w-full h-[170px] rounded-md object-cover bg-center"
        :src="product.image"
        alt=""
      />
      <div
        class="absolute top-0 bg-slate-300/50 opacity-0 hover:opacity-100
        transition duration-300  w-full h-full flex item-center justify-center"
      >
        <router-link :to="{ name: 'productDetails', params: {id: product.id}}" >
            <div class="pt-[50px]" >Details</div>
        </router-link>
      </div>
    </div>
    <div class="h-[40px] flex justify-between items-center">
      <div class="capitalize">{{ product.name }}</div>
      <div class="text-[#AB7A5F]">${{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    navigateToDetails(){
        const thisID = this.product.id
        console.log(this.product.id)
        this.$router.push('/product-details/')
    }
  }
};
</script>

