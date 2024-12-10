<template>
    <div v-show="loading">
        <p>Loading...</p>
    </div>
    <div v-show="error">
        <p>error...</p>
    </div>
    <div class="grid mx-6 sm:grid-cols-4 gap-10">
        <ProductCard></ProductCard>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { useProductsAllStore} from '../stores/productStore';
export default {
    name : "AllProducts",
    components:{
        ProductCard
    },
    setup() {
    const productStore = useProductsAllStore();

    return {
      loading: productStore.loading,
      error: productStore.error,
    };
  },
};
</script>

<style>
    
</style>
