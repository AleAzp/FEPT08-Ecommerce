<template>
    <div class="mx-6 sm:mx-12 mb-4 md:mx-28 poppins-semibold text-secundaryColor text-md sm:text-xl">About</div>
   <div class="text-center flex-grow">
       <div class="flex items-center justify-center h-full">
           <svg width="685" height="200" viewBox="0 0 685 685" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g clip-path="url(#clip0_135_795)">
           <path d="M440.485 183.84C529.501 316.987 679.213 220.511 679.213 416.388C679.213 618.888 338.809 763.67 101.213 515.335C-104.751 278.33 76.0651 165.904 209.213 76.8879C342.36 -12.1278 351.469 50.6924 440.485 183.84Z" fill="#E9FFDA"/>
           <circle cx="427.5" cy="169.388" r="16.5" stroke="#72B646" stroke-width="12"/>
           <circle cx="483.5" cy="169.388" r="16.5" stroke="#72B646" stroke-width="12"/>
           <circle cx="539.5" cy="169.388" r="16.5" stroke="#72B646" stroke-width="12"/>
           <rect x="94.5" y="134.5" width="497" height="374" rx="42.5" stroke="#72B646" stroke-width="15"/>
           <path d="M96 209H599" stroke="#72B646" stroke-width="15"/>
           <path d="M228.982 358.686C233.887 345.802 252.113 345.802 257.018 358.686L331.342 553.913C335.08 563.731 327.829 574.25 317.324 574.25H168.676C158.171 574.25 150.92 563.731 154.658 553.913L228.982 358.686Z" fill="white" stroke="#72B646" stroke-width="12"/>
           <rect x="128" y="556" width="230" height="23" rx="11.5" fill="white" stroke="#72B646" stroke-width="12"/>
           <path d="M188.275 474.831L315.856 504.654" stroke="#72B646" stroke-width="12"/>
       <path d="M200.702 424.296L291.831 446.664" stroke="#72B646" stroke-width="12"/>
       </g>
       <defs>
       <clipPath id="clip0_135_795">
       <rect width="685" height="685" fill="white"/>
       </clipPath>
       </defs>
       </svg>
       </div>
       <p class="poppins-regular text-secondaryColor text-[14px] sm:text-[16px]">This page is under construction.</p>
       <button type="action" @click="goToProducts"  class="buttonMore mt-2 py-2">Find products!</button>
   </div>
</template>

<script>
export default {
   name : "User",
   methods: {
   goToProducts() {
     this.$router.push('/products/all'); 
   },
},
}
</script>

<style>
   
</style>