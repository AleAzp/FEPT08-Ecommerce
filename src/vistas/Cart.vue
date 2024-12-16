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
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">{{productsInCart.addPrice}} $</p>
                </div>
                <div class="flex justify-between">
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">Shipping</p>
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">20.00 $</p>
                </div>
                <div class="flex justify-between ">
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">TOTAL</p>
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">{{productsInCart.sumTotalPrice}} $</p>
                </div>
            </div>
            <button type="action" @click="openPopUp" class="buttonPay mt-2 py-2">ORDER NOW!</button>
            <button type="action"  @click="goToProducts"  class="buttonMore mt-2 py-2">Find more products!</button>
        </div>
    </div>
    <div v-else class="text-center">
        <p class="poppins-regular text-secondaryColor text-[14px] sm:text-[16px]">Your cart is empty. Add some products!</p>
        <button type="action" @click="goToProducts"  class="buttonMore mt-2 py-2">Find products!</button>
    </div>
</div>
<div v-if="isModalOpen === true" class="fixed inset-0  bg-grayExtraLightColor z-50 flex items-center justify-center">
    <div class="bg-white w-full h-full sm:rounded-lg shadow-lg relative">
        <!-- Close button -->
        <span 
            @click="closeModal" 
            class="absolute top-3 right-4 sm:right-24 lg:right-96 text-3xl cursor-pointer text-gray-800">
            &times;
        </span>
        <!-- Content -->
        <PaymentForm class="mt-10"/>
    </div>
</div>
</template>

<script>
import { useProductsInCart } from '../stores/cartStore';
import ProductInCart from '../components/ProductInCart.vue';
import PaymentForm from '../components/PaymentForm.vue';
export default {
    name : "Cart",
    components:{
        ProductInCart, PaymentForm
    },
    data() {
        return {
            isModalOpen: false
        };
    },
    computed:{
        productsInCart(){
            return useProductsInCart();
        },
        addToCartStore(){
            return useProductsInCart();
        },
    },
    methods: {
    goToProducts() {
      this.$router.push('/products/all'); 
    },
    // Method to open the modal
    openPopUp() {
      this.isModalOpen = true;
    },
    // Method to close the modal
    closeModal() {
      this.isModalOpen = false;
    }
  }

    
}
</script>

<style>
    
</style>
