<template>
    <div class="mt-14 sm:mt-0 sm:mx-12 md:mx-24">
        <div class="relative">
            <img class="w-full hidden sm:flex" :src="banner2" alt="banner" />
            <div class="flex flex-col absolute inset-0 items-center justify-center ">
            <Countdown></Countdown>
            </div>
        </div> 
    </div>
    <SearchBar class="mt-14 sm:mt-0"></SearchBar>
    <div class="flex flex-row justify-between items-top">
        <NavCategories></NavCategories>
        <Filter class="mr-6 sm:mr-12 md:mr-24"></Filter>
    </div>
    
    <router-view></router-view>
    

    

</template>

<script>
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import SearchBar from "../components/SearchBar.vue";
import Countdown from "../components/Countdown.vue";
import NavCategories from '../components/NavCategories.vue';
import AllProducts from './AllProducts.vue';
import MenCothing from './MenCothing.vue';
import WomanClothing from './WomanClothing.vue';
import Jewelry from './Jewelry.vue';
import Filter from '../components/Filter.vue';

export default {
    name : "Products",
    components: {
    SearchBar, Countdown, NavCategories, AllProducts, Jewelry, WomanClothing, MenCothing, Filter
  },
    data(){
        return {
            banner: banner,
            banner2: banner2

        }
    },
}
</script>

<style>
    
</style>
