<template>
    <div v-for="product in products" :key="product.id" class="bg-whiteColor drop-shadow p-8 text-center rounded-lg">
        <img class="h-48 mb-8 mx-auto my-auto block" :src="product.image" alt="producto">
        <h3 class="poppins-semibold text-left text-md"> {{product.title}} </h3>
        <p class="poppins-regular text-left text-sm"><i class="fa-solid fa-star"></i> {{product.rating.rate}} (rating)</p>
        <div class="flex flex-row justify-between items-end">
                    <h2 class="poppins-semibold text-left text-xl">{{product.price}} $</h2>
                    <button @click="CartStore.addToCart(product)" class="text-whiteColor bg-hoverColor active:bg-secondaryColor py-3 px-4 rounded-lg drop-shadow"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>    
    </div>

    
  </template>

<script>
import { useProductsAllStore } from '../stores/productStore';
import { useProductsInCart } from '../stores/CartStore'

export default {
    name: "ProductCard",
    props: {
        products: {
            type: Array,
            required: true
        },},
    computed:{
        productStore(){
            return useProductsAllStore();
        },
        CartStore(){
            return useProductsInCart();
        }
    },
};
</script>

<style>
    
</style>