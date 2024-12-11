import { defineStore } from "pinia";

export const useProductsAllStore = defineStore('productAll',{
    state: () => ({
        loading: false,
        error: false,
        products: [] 
    }),
    actions:{
        async getProducts() {
            this.loading = true;
            this.error = false;
      
            try {
              const response = await fetch("https://fakestoreapi.com/products");
              if (!response.ok) {
                throw new Error("Failed to fetch products");
              }
              this.products = await response.json();
            } catch (err) {
              console.error(err);
              this.error = true;
            } finally {
              this.loading = false;
            }
          },
        },
      });