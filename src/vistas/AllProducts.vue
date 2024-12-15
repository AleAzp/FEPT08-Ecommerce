<template>
    <div v-show="productStore.loading">
        <p class="loadingMessage">Loading...</p>
    </div>
    <div v-show="productStore.error">
        <p class="errorMessage">error...</p>
    </div>
    <div class="productsGrid">
        <ProductCard :products="productStore.filterProducts"/>
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
    computed:{
        productStore(){
            return useProductsAllStore();
        },
        allProducts() {
        return this.productStore.filterProducts; 
        },
    },
    mounted() {
        this.productStore.getProducts();
    },
}
</script>

<style>
    
</style>
