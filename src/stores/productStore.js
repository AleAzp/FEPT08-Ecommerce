import { defineStore } from "pinia";

export const useProductsAllStore = defineStore('productAll',{
    state: () => ({
        loading: false,
        error: false,
        products: [] 
    }),
    getters: {  
      filterProducts:(state) => state.products,
      filterJewelery: (state) => {return state.products.filter(e => e.category === "jewelery");},
      filterMen: (state) => {return state.products.filter(e => e.category === "men's clothing");},
      filterWoman: (state) => {return state.products.filter(e => e.category === "women's clothing");},
      filterElectronics: (state) => {return state.products.filter(e => e.category === "electronics");},

    },
  
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