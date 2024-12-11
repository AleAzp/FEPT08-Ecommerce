<template>
    <div v-show="productStore.loading">
        <p>Loading...</p>
    </div>
    <div v-show="productStore.error">
        <p>error...</p>
    </div>
    <div class="mt-4 grid mx-6 sm:mx-12 md:mx-24 grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-6">
        <ProductCard :products="productStore.filterJewelery"/>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { useProductsAllStore} from '../stores/productStore';
export default {
    name : "Jewelery",
    components:{
        ProductCard
    },
    computed:{
        productStore(){
            return useProductsAllStore();
        },
        allProducts() {
        return this.productStore.filterJewelery; 
        },
    },
    mounted() {
        this.productStore.getProducts();
    },
}
</script>

<style>
    
</style>
