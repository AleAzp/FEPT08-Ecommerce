<template>
    <div class="mx-6 sm:mx-12 mb-4 md:mx-28 poppins-semibold text-secundaryColor text-md sm:text-xl">My cart</div>
    <div class="flex-grow">
    <div v-if="productsInCart.productsCart.length > 0" class="grid mx-6 sm:mx-12 md:mx-28 grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
        
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
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">{{totalPrice}} $</p>
                </div>
            </div>
            <button type="action" @click="openPopUp" class="buttonPay mt-2 py-2">ORDER NOW!</button>
            <button type="action"  @click="goToProducts"  class="buttonMore mt-2 py-2">Find more products!</button>
        </div>
    </div>
    <div v-else class="text-center">
        <div class="flex items-center justify-center h-full">
            <svg width="685" height="200" viewBox="0 0 685 685" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_136_796)">
            <path d="M198.196 230.014C343.193 161.987 275.467 10.5571 465.952 33.187C662.879 56.582 744.344 392.275 461.432 586.218C195.052 751.829 117.236 569.412 53.8774 434.365C-9.48093 299.319 53.1979 298.041 198.196 230.014Z" fill="#E9FFDA"/>
            <path d="M35.9741 165.269L70.7219 157.999C81.1625 155.815 95.4944 158.231 105.353 181.914C115.211 205.598 126.405 231.266 152.65 298.193M265.932 450.588L559.589 336.595C580.931 328.311 593.92 306.59 591.12 283.868L574.719 150.786C571.053 121.041 542.224 101.181 513.125 108.356L171.966 192.472C142.617 199.708 126.351 231.13 137.387 259.271L201.289 422.23C211.346 447.876 240.252 460.557 265.932 450.588Z" stroke="#72B646" stroke-width="15" stroke-linecap="round"/>
            <path d="M261.991 452.064L231.306 464.102C202.885 477.2 180.85 491.515 191.945 515.246C195.047 526.006 207.062 547.943 249.784 535.328C292.506 522.712 517.507 477.786 624.668 456.9" stroke="#72B646" stroke-width="15" stroke-linecap="round"/>
            <circle cx="339.514" cy="158.468" r="73" transform="rotate(-11.8161 339.514 158.468)" fill="white" stroke="#72B646" stroke-width="12"/>
            <circle cx="314.435" cy="583.102" r="38.5" transform="rotate(-11.8161 314.435 583.102)" fill="white" stroke="#72B646" stroke-width="16"/>
            <circle cx="559.138" cy="531.908" r="38.5" transform="rotate(-11.8161 559.138 531.908)" fill="white" stroke="#72B646" stroke-width="16"/>
            <path d="M304.096 140.561L375.904 176.946" stroke="#72B646" stroke-width="12" stroke-linecap="round"/>
            <path d="M357.857 122.959L321.471 194.767" stroke="#72B646" stroke-width="12" stroke-linecap="round"/>
            </g>
            <defs>
            <clipPath id="clip0_136_796">
            <rect width="685" height="685" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
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
import { useProductsInCart } from '../stores/cartStore.js';
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
        cartStore(){
            return useProductsInCart();
        },
        productsInCart(){
            return useProductsInCart();
        },
        addToCartStore(){
            return useProductsInCart();
        },
        totalPrice() {
            return this.productsInCart.productsCart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
        }
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
