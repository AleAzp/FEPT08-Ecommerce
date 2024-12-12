<template>
    <div>
        <h2>Cart view</h2>
    </div>
    <ProductInCart/>

</template>

<script>
import { useProductsInCart } from '../stores/CartStore';
import ProductInCart from '../components/ProductInCart.vue';
export default {
    name : "Cart",
    components:{
        ProductInCart 
    },
    computed:{
        addToCartStore(){
            return useProductsInCart();
        },
    },

    
}
</script>

<style>
    
</style>
