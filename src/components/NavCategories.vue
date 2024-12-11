<template>
    <div>
        <nav>
            <ul class="flex flex-row mx-6 sm:mx-12 md:mx-24 gap-5 md:gap-8 mt-2">
                <li class="navCategories">
                    <router-link to="/products/all" exact-active-class="activeLinkCategories">
                    <div class="">All</div>
                    </router-link></li>
        
                    <li class="navCategories"><router-link to="/products/jewelery" exact-active-class="activeLinkCategories">
                    <div>Jewelery</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/electronics" exact-active-class="activeLinkCategories">
                    <div>Electronics</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/menclothing" exact-active-class="activeLinkCategories">
                    <div class="">Men</div>
                    </router-link></li>

                    <li class="navCategories"><router-link to="/products/womanclothing" exact-active-class="activeLinkCategories">
                    <div class="">Woman</div>
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