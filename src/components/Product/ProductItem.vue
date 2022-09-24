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
        transition duration-300 w-full h-full "
      >
        <router-link
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          <div class="pt-[65px] text-center w-full h-full cursor-pointer">
            <font-awesome-icon
              class="px-3 text-[23px] text-[#AB7A5F]"
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
        </router-link>
      </div>
    </div>
    <div class="h-[50px] pt-[15px] flex justify-between items-center">
      <div>
        <div class="capitalize font-bold text-[16px]">{{ product.name }}</div>
        <div class="text-[#AB7A5F]">${{ product.price }}</div>
      </div>
      <div>
        <font-awesome-icon
          class="px-3 text-[23px] text-[#AB7A5F]"
          icon="fa-solid fa-cart-plus"
        />
      </div>
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
};
</script>
