<template>
    <div class="h-[50px] flex items-center">
        <div>{{DATA.length}} Product Found</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters(['DATA'])
        }
    }
</script>

<style lang="scss" scoped>

</style>