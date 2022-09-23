<template>
  <div class="bg-[#AB7A5F]">
    <div class="w-[90vw] h-[80px] mx-auto flex items-center justify-between">
      <div className="logo">LOGO</div>
      <div className="nav-links flex items-center justify-evenly">

        <div class="w-[100px]">
          <router-link to="/" class="text-black text-[18px]">Home</router-link>
        </div>
        <div class="w-[100px]">
          <router-link to="/products" class="text-black text-[18px]">Products</router-link>
        </div>
        
      </div>
      <div>cart</div>
    </div>
  </div>
</template>

<script>
import { links } from "../utils/constants";
export default {
  data() {
    return {
      navLinks: links,
    };
  },
  methods: {
    log() {
      console.log(this.navLinks);
    },
  },
};
</script>

<style lang="scss" scoped></style>
