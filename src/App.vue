<template>
  <body class="min-h-screen flex flex-col">
  <header class="flex flex-row justify-between items-center center mx-6 sm:mx-12 md:mx-24 py-4 bg-white">
    <img class="hidden sm:flex h-12" src="./assets/logo.png" alt="logo my ecommerce">
    <img class="h-8 sm:hidden" src="./assets/logo_xs.png" alt="logo my ecommerce">
    <nav>
      <ul class="flex flex-row gap-8">
        <li class="navMain"><router-link to="/" active-class="activeLink">
          <div class="hidden md:flex">Products</div>
          <i class="fa-solid fa-shirt md:hidden"></i>
        </router-link></li>
        <li class="navMain"><router-link to="/cart" active-class="activeLink">
          <div class="hidden md:flex">My card</div>
          <i class="fa-solid fa-cart-shopping md:hidden"></i>
        </router-link></li>
        <li class="navMain"><router-link to="/user" active-class="activeLink">
          <div class="hidden md:flex">My profile</div>
          <i class="fa-solid fa-user md:hidden"></i>
        </router-link></li>
      </ul>
      </nav>
  </header>
  
  <router-view></router-view>
  
  

  <footer class="bg-primaryColor py-10">
    <div class="flex flex-col sm:flex-row justify-between items-center center mx-6 sm:mx-12 md:mx-24 mb-10">
      <img class="hidden sm:flex h-10" src="./assets/logo2.png" alt="logo my ecommerce">
      <img class="sm:hidden h-10" src="./assets/logo_xs_2.png" alt="logo my ecommerce">
      <ul class="flex text-center flex-col pt-8 sm:pt-0 sm:flex-row gap-8">
        <li class="navFooter text-sm text">About</li>
        <li class="navFooter text-sm">Privacy & Policy</li>
        <li class="navFooter text-sm">Terms & Condition</li>
      </ul>
    </div>
    <div class="flex flex-col sm:flex-row justify-between items-center center sm:mx-12 md:mx-24 gap-6 text-center">
      <p class="hidden sm:visible poppins-light text-xs">©2024 Final project frontend bootcamp. Codeop.</p> 
      <ul class="flex flex-row gap-4 items-center">
        <i class="fa-brands fa-instagram fa-md text-secondaryColor bg-whiteColor px-2.5 py-2 rounded-full shadow-md"></i>
        <i class="fa-brands fa-twitter fa-md  text-secondaryColor bg-whiteColor p-2 rounded-full shadow-md"></i>
        <i class=" fa-brands fa-facebook fa-md text-secondaryColor bg-whiteColor p-2 py-2 rounded-full shadow-md"></i>
      </ul>
      <p class="sm:hidden poppins-light text-xs text-secondaryColor mt-4 sm:mt-0">©2024 Final project frontend bootcamp. Codeop.</p> 
    </div>

  </footer>
  </body>
</template>

<script>
import Products from "./vistas/Products.vue";
import User from "./vistas/User.vue";
import Cart from "./vistas/Cart.vue";
export default {
  name: "App",
  components: {
    Products, User, Cart
  },
  data (){
    return{
      isProducts: true,
      title: "hola",
    }
  }
  
}
</script>

<style>
  
</style>