<template> 
    <div class=""> 
      <form class="flex flex-row justify-center gap-4"> 
        <div class="relative flex flex-row gap-4">
            <input id="Search" type="text" v-model="input" class="w-46 sm:w-64 border-2 p-2 rounded-3xl px-9 text-secondaryColor border-secondaryColor" placeholder="shirts..." />
            <i class="fa-solid fa-search fa-sm absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-secondaryColor"></i>
        </div>
            <button type="submit" class="buttonSearch">Search</button>
      </form>
    </div>
  </template>

<script>
export default {
    name: "Search bar",
    data(){
        return {
            input:""
        }
    },
    methods: {
    }
    
}
</script>

<style>
    
</style>