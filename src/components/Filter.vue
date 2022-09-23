<template>
  <div class="w-full">
    <div class="flex justify-center items-center h-[50px]">
      <input
        type="text"
        class="w-4/6 h-[35px] outline-none rounded-lg border px-2"
      />
    </div>
    <div>
      <h3 class="font-bold">Categories</h3>
      <button @click="uniqueCategory">log</button>
      <ul>
        <li v-for="category in categories">{{ category }}</li>
      </ul>
    </div>
    <div>
      <h3 class="font-bold">Colors</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState(['categories']),
    ...mapGetters(["DATA"]),
  },
  methods: {
    ...mapMutations(['setCategories']),
    uniqueCategory() {
        
        const uniqueCategories = this.DATA?.filter(
          (value, index, self) =>
            self.findIndex((item) => item.category === value.category) === index
        ).map((item) => item.category)
      
      this.setCategories(uniqueCategories)
    },
    
  },
  mounted() {
    this.uniqueCategory();
  },
};
</script>
