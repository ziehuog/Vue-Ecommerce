<template>
  <div class="bg-[#AB7A5F]">
    <div class="w-[90vw] h-[80px] mx-auto flex items-center justify-between">

<!-- logo -->
      <router-link to="/" class="text-white text-[18px]">
        <img class="h-[50px]" src="../assets/ziehuog-logo.png" alt="" />
      </router-link>

<!-- menu -->
      <div className="nav-links flex items-center justify-evenly">
        <div class="w-[100px]">
          <router-link to="/" class="text-white text-[18px]">Home</router-link>
        </div>
        <div class="w-[100px]">
          <router-link to="/products" class="text-white text-[18px]"
            >Products</router-link
          >
        </div>
      </div>
<!-- cart -->
      <div>
        <router-link to="/cart">
          <font-awesome-icon
            class="px-3 text-[25px] text-white"
            icon="fa-solid fa-cart-arrow-down"
          />
          <span>{{cart/quantity}}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['cart/quantity'])
  },
  methods: {
    log(){
      console.log(cart/quantity)
    }
  },
  mounted(){
    log()
  }
};
</script>

