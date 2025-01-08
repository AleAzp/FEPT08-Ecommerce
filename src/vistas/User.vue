<template>
    <div class="mx-6 sm:mx-12 mb-4 md:mx-28 poppins-semibold text-secundaryColor text-md sm:text-xl">My profile</div>
    

    <div class="mx-6 sm:mx-12 md:mx-28 flex flex-col items-center justify-center p-4 drop-shadow rounded-lg bg-grayExtraLightColor max-h-80">
        <div class="absolute top-3 right-4 poppins-regular text-sm text-blue-500 cursor-pointer hover:underline">Edit</div>
            <img class=" border-whiteColor border-4 h-20 w-20 sm:h-32 sm:w-32 rounded-full object-cover" src="https://media.licdn.com/dms/image/v2/D4E03AQEmdQBizGgDmQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729677257545?e=1741824000&v=beta&t=EdSJ-NMp89OJmdU05NYicEjzMS_LQi4BJm20jbPCkm0">
            <div class="poppins-semibold text-secundaryColor text-lg sm:text-xl">Alejandra Azpurua</div>
        <div class="poppins-regular text-secundaryColor text-xs sm:text-sm">aleazpurua@gmail.com</div>
    </div>
<div class="flex-grow sm:hidden">
    <div class="grid grid-cols-1 gap-4 lg:gap-10 mt-4 justify-evenly">
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-solid fa-location-dot"></i>
                <div>My adress</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-regular fa-calendar-days"></i>
                <div>My orders</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-solid fa-arrow-rotate-left"></i>
                <div>My returns</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-regular fa-credit-card"></i>
                <div>My payments</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-solid fa-lock"></i>
                <div>Passwords</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
        <div class="profileButtonsSm">
            <div class="flex flex-row gap-6 items-center justify-center">
                <i class="fa-solid fa-gear"></i>
                <div>Settings</div>
            </div>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
    </div>
</div>
<div class="flex-grow">
    <div class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 sm:mx-12 md:mx-28 ">
        <div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-solid fa-location-dot text-2xl"></i>
                <div>My adress</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden"></i>
        </div>
        <div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-regular fa-calendar-days text-2xl"></i>
                <div>My orders</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden"></i>
        </div>
        <div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-solid fa-arrow-rotate-left text-2xl"></i>
                <div>My returns</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden text-2xl"></i>
        </div>
        <div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-regular fa-credit-card text-2xl"></i>
                <div>My payments</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden"></i>
        </div>
        <div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-solid fa-lock text-2xl"></i>
                <div>Passwords</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden"></i>
        </div><div class="profileButtonsLg">
            <div class="flex flex-row sm:flex-col gap-6 sm:gap-1 items-center justify-center">
                <i class="fa-solid fa-gear text-2xl"></i>
                <div>Settings</div>
            </div>
            <i class="fa-solid fa-chevron-right sm:hidden"></i>
        </div>
  
    </div>
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
