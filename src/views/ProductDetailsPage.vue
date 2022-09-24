<template>
  <div class="container mx-auto">
    <PathPage />
    <div class="grid grid-cols-7 gap-4 mt-[30px]">
      <div class="col-span-3 w-full h-[450px]">
        <!-- :src="productDetails?.images[0]?.url"   -->
        <img class="w-full h-full object-cover" />
      </div>
      <div class="col-span-4">
        <div class="grid grid-cols-5 py-2">
          <div class="font-bold col-span-1">Name:</div>
          <div class="cols-span-4">{{ productDetails.name }}</div>
        </div>

        <div class="grid grid-cols-5 py-2">
          <div class="font-bold col-span-1">Category:</div>
          <div class="cols-span-4">{{ productDetails.category }}</div>
        </div>

        <div class="grid grid-cols-5 py-2">
          <div class="font-bold col-span-1">Company:</div>
          <div class="col-span-4">{{ productDetails.company }}</div>
        </div>

        <div class="grid grid-cols-5 py-2">
          <div class="font-bold col-span-1">Details:</div>
          <div class="col-span-4">{{ productDetails.description }}</div>
        </div>
        <div class="w-full flex justify-center mt-8 mb-5">
          <button
            class="border px-4 h-[45px] rounded-lg flex justify-center items-center bg-[#ab7a5f94] hover:bg-[#ab7a5fc0] text-white active:bg-[#ab7a5f]"
          >
            <p class="h-full pt-[15px] text-[16px]">Add to cart</p>
            <font-awesome-icon class="px-3 text-[23px]" icon="fa-solid fa-cart-plus" />
          </button>
        </div>
        <button @click="log">Click</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import PathPage from "../components/PathPage.vue";
export default {
  components: { PathPage },
  data() {
    return {
      id: "",
      productDetails: {},
    };
  },
  methods: {
    async fetchData() {
      try {
        const data = await axios.get(
          `https://course-api.com/react-store-single-product?id=${this.id}`
        );
        this.productDetails = data.data;
      } catch (error) {
        console.log(error);
      }
    },
    log() {
      console.log(this.productDetails);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.fetchData();
  },
};
</script>
