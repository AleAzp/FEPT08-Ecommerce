<template>
<div v-for="product in productsInCart.productsCart" :key="product.id" class="p-4 bg-grayExtraLightColor drop-shadow text-center rounded-lg mb-5">
  <div class="flex gap-4">
    <div class="bg-whiteColor rounded-md items-center p-1 w-24 h-24 mx-auto">
      <img 
        :src="product.image" 
        alt="producto" 
        class="pl-3 h-full object-cover center">
    </div>
    
    <div class="flex flex-col flex-1">
      <h3 class="poppins-semibold text-left text-[12px] sm:text-[16px] line-clamp-2"> {{product.title}} </h3>
      <p class="poppins-regular text-left text-[10px] sm:text-[14px]"> {{product.category}} </p>
      <h2 class="poppins-semibold text-left text-[14px] sm:text-[18px]">{{product.price}} $</h2>
    
  <div class="flex justify-left mt-3">
    <div class="flex flex-row gap-8 text-whiteColor bg-whiteColor active:bg-secondaryColor py-1 px-3 rounded-3xl drop-shadow">
      <button @click="deleteFromCart(product)"><i class="fa-solid fa-trash text-[16px] text-hoverColor"></i></button>
      <button @click="addToCart(product)"><i class="fa-solid fa-plus text-[16px] text-hoverColor"></i></button>
    </div>
  </div>   
    
    </div>
  </div>
   
</div>
</template>

<script>
import { useProductsInCart } from '../stores/CartStore';
export default {
    name: "ProductInCart",
    computed:{
        productsInCart(){
            return useProductsInCart();
        },
        
    },
    methods: {
    // Add a product to the cart
    addToCart(product) {
      this.productsInCart.addToCart(product);
    },
    // Delete a product from the cart
    deleteFromCart(product) {
      this.productsInCart.deleteFromCart(product);
    }
  }
    
}
</script>

<style>
    .line-clamp-2 {
    display: -webkit-box; /* Use a flexbox-like box model */
    -webkit-box-orient: 2; /* Set the orientation to vertical */
    overflow: hidden; /* Hide overflowing content */
    text-overflow: ellipsis; /* Add ellipsis for trimmed text */
    }
</style>