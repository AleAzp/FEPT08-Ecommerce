<template>
    <form class="flex flex-col gap-3 items-center">
        <div class="flex flex-col">
            <div class="flex flex-row items-center justify-center gap-4 ">
            <i class="fa-solid fa-lock"></i>
            <h1 class="poppins-bold text-[18px] sm:text-[22px] py-8 sm:py-4">Secure Checkout</h1>
            </div>
            <h3 class="poppins-bold text-[12px] sm:text-[16px]">Billing Information</h3>
                <div class="flex flex-row  gap-2 sm:gap-4">
                    <div class="flex flex-col">
                        <label for="name">Full Name:</label>
                        <input id="name" name="name" type="text" v-model="name" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email">Email Address:</label>
                        <input id="email" name="email" type="email" v-model="email"/>
                    </div>
                </div>
        </div>
        <div class="flex flex-col">
            <h3 class="poppins-bold text-[12px] sm:text-[16px]">Shipping addres:</h3>
                <div class="flex flex-row gap-2 sm:gap-4">
                    <div class="flex flex-col">
                        <label for="street">Street:</label>
                        <input id="street" name="street" type="text" v-model="street"/>
                    </div>
                    <div class="flex flex-col">
                        <label for="floor">Floor and door:</label>
                        <input id="floor" name="floor" type="text" v-model="floor" />
                    </div>
                </div>
                <div class="flex flex-row  content-between gap-2 sm:gap-4">
                    <div class="flex flex-col">
                        <label for="zipCode">Zip code:</label>
                        <input id="zipCode" name="zipCode" type="number" v-model="zipCode" class="w-16 sm:w-20" />
                    </div>
                    <div class="flex flex-col">
                        <label for="state">State:</label>
                        <input id="state" name="state" type="text" v-model="state" class="w-32 sm:w-36" />
                    </div>
                    <div class="flex flex-col">
                        <label for="country">Country</label>
                        <input id="country" name="country" type="text" v-model="country" class="w-28 sm:w-40" />
                    </div>
                </div>
        </div>
        <div class="flex flex-col">
            <h3 class="poppins-bold text-[12px] sm:text-[16px]">Billing Information</h3>
            <div class="flex flex-col">
                <label for="creditCart">Credit/Debit Card Number: </label>
                <input id="creditCart" name="creditCard" type="number" v-model="creditCart" class="bg-whiteColor hover:bg-secundaryColor" />
            </div>
            <div class="flex flex-row gap-2 sm:gap-4">
            <div class="flex flex-col">
                <label for="expirationDate">Expiration Date (MM/YY): </label>
                <input id="expirationDate" name="expirationDate" type="number" v-model="expirationDate" class="" />
            </div>
            <div class="flex flex-col">
                <label for="cvv">CVV: </label>
                <input id="cvv" name="ccv" type="number" v-model="cvv"/>
            </div>
            </div>
            <div class="flex flex-col p-2 gap-2 mt-2">
                <div class="flex justify-between">
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">Subtotal</p>
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">{{productsInCart.addPrice}} $</p>
                </div>
                <div class="flex justify-between">
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">Shipping</p>
                    <p class="poppins-regular text-left text-[14px] sm:text-[16px]">20.00 $</p>
                </div>
                <div class="flex justify-between">
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">TOTAL</p>
                    <p class="poppins-bold text-left text-[16px] sm:text-[20px]">{{productsInCart.sumTotalPrice}} $</p>
                </div>
            </div>
        </div>
        <div class="flex">
        <button type="action" @click.prevent="saveBuyerData" class="buttonPay">Pay now!</button>
        </div>
    </form>
</template>

<script>
import { useProductsInCart } from '../stores/CartStore';
export default {
    name: "Payment Form",
    computed:{
        productsInCart(){
            return useProductsInCart();
        },
    },
    data(){
        return{
            name: "",
            email: "",
            street: "",
            floor: "",
            zipCode: "",
            state: "",
            country: "",
            creditCart: "",
            expirationDate: "",
            cvv: "",
            savedData: null,
        }
    },
    methods: {
    saveBuyerData() {
      // Collect all data into an object
        const formData = {
            name: this.name,
            email: this.email,
            street: this.street,
            floor: this.floor,
            zipCode: this.zipCode,
            state: this.state,
            country: this.country,
            creditCart: this.creditCart,
            expirationDate: this.expirationDate,
            cvv: this.cvv,
      };
      this.savedData=formData;
      console.log("Collected Form Data:", this.savedData);
    },
    },
}
</script>

<style>
    
</style>