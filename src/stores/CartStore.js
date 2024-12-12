import { defineStore } from "pinia";

export const useProductsInCart = defineStore('productsInCart',{
    state: () => ({
        loading: false,
        error: false,
        productsCart: [] 
    }),
    getters: {  
    //   filterJewelery: (state) => {return state.products.filter(e => e.category === "jewelery");},
    },
  
    actions:{
        addToCart(product) {
            // if (product) {
            //     this.productsCart.push(product);
            // } else {
            //     console.error("there is no product in your cart yet.");
            // }
            this.productsCart.push(product)
            console.log(product)

        },

}});