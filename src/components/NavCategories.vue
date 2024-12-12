<template>
    <div>
        <nav>
            <ul class="flex flex-wrap mx-6 sm:mx-12 md:mx-24 gap-5 md:gap-5 lg:gap-8 ">
                    <li class="navCategories">
                    <router-link to="/products/all" exact-active-class="activeLinkCategories">
                    <div class="sm:mt-2">All</div>
                    </router-link></li>
        
                    <li class="navCategories"><router-link to="/products/jewelery" exact-active-class="activeLinkCategories">
                    <div class="sm:mt-2">Jewelery</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/electronics" exact-active-class="activeLinkCategories">
                    <div class="sm:mt-2">Electronics</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/menclothing" exact-active-class="activeLinkCategories">
                    <div class="sm:mt-2">Men</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/womanclothing" exact-active-class="activeLinkCategories">
                    <div class="sm:mt-2">Woman</div>
                    </router-link></li>
            </ul>
        </nav>
        
    </div>
</template>

<script>
export default {
    name: "NavCategories",
    data() {
        return {
        }   
    }
}
</script>

<style>
    
</style>