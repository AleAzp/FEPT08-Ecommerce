<template>
     <div class="mx-6 sm:mx-12 mb-4 md:mx-24 poppins-semibold text-secundaryColor text-md sm:text-xl">My profile</div>
    <div class="text-center flex-grow">
        <p class="poppins-regular text-secondaryColor text-[14px] sm:text-[16px]">This page is under construction...</p>
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
