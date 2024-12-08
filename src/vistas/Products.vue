<template>
    <div class="mt-16 sm:mt-0 sm:mx-12 md:mx-24">
        <div class="relative">
            <img class="w-full hidden sm:flex" :src="banner2" alt="banner" />
            <div class="flex flex-col absolute inset-0 items-center justify-center ">
            <Countdown class=" sm:flex"></Countdown>
            </div>
        </div> 
    </div>
    <SearchBar class="my-20 sm:my-4 flex-grow"></SearchBar>

    

</template>

<script>
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import SearchBar from "../components/SearchBar.vue";
import Countdown from "../components/Countdown.vue";

export default {
    name : "Products",
    components: {
    SearchBar, Countdown
  },
    data(){
        return {
            banner: banner,
            banner2: banner2

        }
    }
    
}
</script>

<style>
    
</style>
