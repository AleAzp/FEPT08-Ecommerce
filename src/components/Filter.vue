
<template>
  <div class="divide-y-2 divide-hoverColor dropdown py-2 px-2 rounded-md poppins-medium bg-grayLightColor sm:bg-whiteColor drop-shadow text-darkColor" @click="toggleDropdown">
    <button class="flex flex-row relative gap-2 items-center dropdown-btn text-center">
        <i class="fa-solid fa-sliders text-darkColor pl-2"></i>
        <div class="pr-2 text-sm md:text-sm ">{{'Sort by'}} {{ displayMessage }}</div>
    </button>

    <!-- Dropdown Menu -->
    <ul v-if="isOpen" class="dropdown-menu mt-2">
      <li
        v-for="option in options"
        :key="option"
        @click.stop="applyFilter(option)"
        class="mt-1 dropdown-item poppins-medium hover:bg-primaryLightColor rounded-3xl px-6 text-[11px] md:text-sm py-2">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useProductsAllStore } from '../stores/productStore';
import { useProductsInCart } from '../stores/cartStore'
export default {
  name: "Dropdown",
  props: {
        products: {
            type: Array,
            required: true
        },},
  data() {
    return {
      isOpen: false, 
      sortedOption: null,
      options: ["price: high-low", "price: low-high", "clear filter"], 
    };
  },
  computed: {
    displayMessage() {
      if (this.sortedOption === "price: high-low") {
        return ": Price high";
      } else if (this.sortedOption === "price: low-high") {
        return ": Price low";
      } else if (this.sortedOption === "clear filter") {
        return ""; 
      } else {
        return ""; 
      }
    },
    productStore() {
      return useProductsAllStore();
    },
    CartStore() {
      return useProductsInCart();
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    applyFilter(option) {
      this.isOpen = false;

      this.sortedOption = option;

      if (option === "price: high-low") {
        this.products.sort((a, b) => b.price - a.price); // High to low
      } else if (option === "price: low-high") {
        this.products.sort((a, b) => a.price - b.price); // Low to high
      } else if (option === "clear filter") {
        this.products.sort((a, b) => a.id - b.id); // Reset
        return;
      }
    },
  },
};
</script>