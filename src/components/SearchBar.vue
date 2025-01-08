<template> 
    <div class=""> 
      <form class="flex flex-row justify-center gap-2 md:gap-4 my-4" @submit.prevent="searchProducts"> 
        <div class="relative flex flex-row gap-4">
            <input id="Search" type="text" v-model="input" class="inputText" placeholder="shirts..." />
            <i class="fa-solid fa-search fa-sm absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-secondaryColor"></i>
        </div>
            <button type="submit" class="buttonSearch">Search</button>
      </form>
    </div>
  </template>

<script>
export default {
    name: "SearchBar",
    data(){
        return {
            input:"",
        }
    },
    methods: {
      searchProducts() {
  if (this.input.trim() !== "") {
    this.$router.push({ name: "SearchResults", query: { q: this.input.trim() } });
    this.input = ""; // Reset
  }
},
    
},}
</script>

<style>
    
</style>