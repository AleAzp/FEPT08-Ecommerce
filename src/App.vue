<template>
  <div>
    <h1 class="text-3xl font-bold underline">{{title}}</h1>
    <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: "App",
  data (){
    return{
      title: "hola",
    }
  }
  
}
</script>

<style>
  
</style>