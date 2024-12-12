<template>
    <div>
        {{ productsInCart.productsCart }}
    </div>
</template>

<script>
import { useProductsInCart } from '../stores/CartStore';
export default {
    name: "ProductInCart",
    // props: {
    //     productsCart: {
    //         type: Array,
    //         required: true
    //     },},
    computed:{
        productsInCart(){
            return useProductsInCart();
        }
    },
    
}
</script>

<style>
    
</style>