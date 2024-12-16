import { defineStore } from "pinia";

export const useProductsInCart = defineStore('productsInCart',{
    state: () => ({
        loading: false,
        error: false,
        productsCart: [],
        total: 0
    }),
    getters: {  
        addPrice(state) {
            return state.productsCart.reduce((sum, product) => {
              return sum + (product.price);  
            }, 0).toFixed(2);
          },
        sumTotalPrice(state) {
            return (parseFloat(this.addPrice) + 20).toFixed(2);
        },
      },    
  
    actions:{
        addToCart(product) {
            this.productsCart.push(product)
            // console.log(product)
        },
        deleteFromCart(product) {
            const index = this.productsCart.findIndex(p => p.id === product.id);
              this.productsCart.splice(index, 1);  // delete from index
            }
          
        }
});