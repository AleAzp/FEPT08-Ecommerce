<template>
    <div class="mx-6 sm:mx-12 mb-4 md:mx-24 poppins-semibold text-secundaryColor text-md sm:text-xl">My cart</div>
    <div class="flex-grow">
    <div v-if="productsInCart.productsCart.length > 0" class="grid mx-6 sm:mx-12 md:mx-24 grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
        
        <div><ProductInCart/></div>
        
        <div   class=" flex flex-col p-4 drop-shadow rounded-lg gap-2  bg-grayExtraLightColor max-h-80">
            
            <h3 class="poppins-semibold text-secundaryColor text-md sm:text-xl text-center">Resume</h3>
            
            <div class="flex flex-col p-2 gap-3 ">
                <div class="flex justify-between">
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">Subtotal</p>
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">{{productsInCart.addPrice}}</p>
                </div>
                <div class="flex justify-between">
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">shipping</p>
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">20 $</p>
                </div>
                <div class="flex justify-between ">
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">TOTAL</p>
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">sum $</p>
                </div>
            </div>
            <button type="submit" class="buttonPay mt-2 py-2">ORDER NOW!</button>
            <button type="submit" class="buttonMore mt-2 py-2">BUY MORE!</button>
        </div>
    </div>
    <div v-else class="text-center ">
        <p class="poppins-regular text-secondaryColor text-md ">Your cart is empty. Add some products!</p>
        <button type="submit" class="buttonMore mt-2 py-2">Find products!</button>
    </div>
</div>
    
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
        productsInCart(){
            return useProductsInCart();
        },
        addToCartStore(){
            return useProductsInCart();
        },
    },

    
}
</script>

<style>
    
</style>
