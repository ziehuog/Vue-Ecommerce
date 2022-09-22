<template>
  <div class="w-full">
    <div class="flex justify-center items-center h-[50px]">
      <input
        type="text"
        class="w-4/6 h-[35px] outline-none rounded-lg border px-2"
      />
    </div>
    <div>
      <h3>Categories</h3>
      <button @click="log">log</button>
      <ul>
        <li v-for="category in arrCategories">{{category}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      arrCategories: [],
    };
  },
  computed: {
    ...mapGetters(["DATA"]),
  },
  methods: {
    uniqueCategory() {
      const uniqueCategories = this.DATA?.filter(
          (value, index, self) =>
            self.findIndex((item) => item.category === value.category) === index
        )
        .map((item) => item.category);

        console.log(uniqueCategories)
    },
    log(){
        console.log(this.arrCategories)
    }
  },
  mounted() {
    this.uniqueCategory();
  },
};
</script>

<style lang="scss" scoped></style>
