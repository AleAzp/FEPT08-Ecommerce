<template>
    <div class="mx-6 sm:mx-12 mb-4 md:mx-28 poppins-semibold text-secundaryColor text-md sm:text-xl">Error page</div>
   <div class="text-center flex-grow">
       <div class="flex items-center justify-center h-full">
        <svg width="685" height="200" viewBox="0 0 685 685" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_195_918)">
        <path d="M172.359 229.288C312.453 151.663 234.696 5.13185 426.272 14.8991C624.326 24.9965 770.575 367.435 501.348 579.967C246.709 763.119 63.0286 517 42.1117 442.883C19.0027 361 32.265 306.914 172.359 229.288Z" fill="#E9FFDA"/>
        <rect x="152.457" y="154.081" width="252" height="61" transform="rotate(-6.76745 152.457 154.081)" fill="white"/>
        <path d="M163.29 217.118L411.416 187.673" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <path d="M191.053 521.759L148.149 160.203C147.656 156.05 150.623 152.285 154.775 151.792L317.561 132.474L395.195 123.262C399.348 122.769 403.113 125.736 403.606 129.889L412.975 208.838C413.468 212.991 417.233 215.958 421.386 215.465L487 207.679L491.501 207.145C495.653 206.652 499.419 209.619 499.912 213.771L510.173 300.24L532.11 485.1C532.346 487.094 531.781 489.101 530.538 490.678L504.031 524.323C501.443 527.608 496.683 528.173 493.398 525.585L459.031 498.509C455.746 495.921 450.986 496.486 448.398 499.771L415.358 541.708C412.77 544.993 408.01 545.558 404.725 542.97L362.788 509.93C359.503 507.342 354.743 507.907 352.155 511.192L325.079 545.559C322.491 548.843 317.731 549.408 314.446 546.82L280.079 519.745C276.795 517.157 272.034 517.722 269.446 521.007L242.37 555.373C239.783 558.658 235.022 559.223 231.737 556.635L193.886 526.815C192.309 525.572 191.29 523.754 191.053 521.759Z" stroke="#72B646" stroke-width="16.6578" stroke-linecap="round"/>
        <path d="M259.026 317.08L288.183 280.071" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <path d="M255.1 283.996L292.109 313.154" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <path d="M385.345 302.09L414.502 265.081" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <path d="M381.419 269.007L418.428 298.164" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <path d="M333.425 406.178C344.011 390.435 379.01 358.527 434.319 356.843" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
        <circle cx="184.336" cy="181.897" r="11.3892" transform="rotate(-6.76745 184.336 181.897)" stroke="#72B646" stroke-width="5.9943"/>
        <circle cx="218.861" cy="177.8" r="11.3892" transform="rotate(-6.76745 218.861 177.8)" stroke="#72B646" stroke-width="5.9943"/>
        <circle cx="253.385" cy="173.703" r="11.3892" transform="rotate(-6.76745 253.385 173.703)" stroke="#72B646" stroke-width="5.9943"/>
        <path d="M159.006 217.753L410.243 187.939" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
        <path d="M401 124.5L496 207.5" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
       </g>
       <defs>
       <clipPath id="clip0_135_795">
       <rect width="685" height="685" fill="white"/>
       </clipPath>
       </defs>
       </svg>
       </div>
       <p class="poppins-regular text-secondaryColor text-[14px] sm:text-[16px]">This page is not found!</p>
       <button type="action" @click="goToProducts"  class="buttonMore mt-2 py-2">Back to products!</button>
   </div>
</template>

<script>
import { useProductsInCart } from '../stores/cartStore';
import ProductInCart from '../components/ProductInCart.vue';
import PaymentForm from '../components/PaymentForm.vue';
export default {
    name : "Not found",
    components:{
        ProductInCart, PaymentForm
    },
    methods: {
    goToProducts() {
      this.$router.push('/products/all'); 
    },
    },
}
</script>

<style>
    
</style>
