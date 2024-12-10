<template>
    <div class="grid mx-6 sm:grid-cols-4 gap-10">
        <div v-for="product in products" :key="product.id" class="bg-whiteColor drop-shadow-md p-8 text-center rounded-lg">
                <img class="h-48 mb-8 mx-auto my-auto block" :src="product.image" alt="producto">
                <h3 class="poppins-semibold text-left text-md"> {{product.title}} </h3>
                <p class="poppins-regular text-left text-sm"><i class="fa-solid fa-star"></i> {{product.rating.rate}} (rating)</p>
                <div class="flex flex-row justify-between items-end">
                    <h2 class="poppins-semibold text-left text-xl">{{product.price}} $</h2>
                    <button class="text-whiteColor bg-hoverColor active:bg-secondaryColor py-3 px-4 rounded-lg"><i class="fa-solid fa-cart-shopping"></i></button>
                </div>    
        </div>
    </div>
    <div v-show="loading">
        <p>Loading...</p>
    </div>
    <div v-show="error">
        <p>error...</p>
    </div>
</template>

<script>
export default {
    name : "AllProducts",
    data(){
        return {
            loading: false,
            error: false,
            products: [] 
        }
    },
    mounted() {
        this.getProducts(); 
    },
    methods: {
        getProducts() {
      this.loading = true; // Start loading
      this.error = false; // Clear any existing errors

      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch products");
          }
          
          return res.json();
          
        })
        .then((json) => {
          this.products = json; // Save fetched products
        })
        .catch((err) => {
          console.error(err);
          this.error = true; // Set error state if something goes wrong
        })
        .finally(() => {
          this.loading = false; // Stop loading
        });
    },
    },

    
}
</script>

<style>
    
</style>
