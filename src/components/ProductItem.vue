<template>
    <div class="px-3 mt-[15px]">
        <div class="w-full relative">
            <img class="w-full h-[170px] rounded-md object-cover bg-center" :src="product.image" alt="">
            <!-- <div class="absolute">detail</div> -->
        </div>
        <div class="h-[40px] flex justify-between items-center">
            <div class="capitalize">{{product.name}}</div>
            <div class="text-[#AB7A5F]">${{product.price}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: {
                type: Object,
                default: () => {},
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>