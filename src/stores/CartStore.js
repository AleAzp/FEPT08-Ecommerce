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
        const existingProduct = this.productsCart.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        } else {
          this.productsCart.push({ ...product, quantity: 1 });
        }
      },
      deleteFromCart(product) {
        const existingProduct = this.productsCart.find(p => p.id === product.id);
          if (existingProduct.quantity > 1) {
            existingProduct.quantity--;
          } else {
            this.productsCart = this.productsCart.filter(p => p.id !== product.id);
          }
      },
      increaseProductQuantity(product) {
        const existingProduct = this.productsCart.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.quantity++;
        }
      },
      decreaseProductQuantity(product) {
        const existingProduct = this.productsCart.find(p => p.id === product.id);
        if (existingProduct && existingProduct.quantity > 1) {
          existingProduct.quantity--;
        } else if (existingProduct && existingProduct.quantity === 1) {
          this.deleteFromCart(product);
        }
      },
    },
  });