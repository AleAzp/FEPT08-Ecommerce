
<template>
  <div class="divide-y-2 divide-hoverColor dropdown py-2 px-4 rounded-md poppins-medium bg-grayLightColor sm:bg-whiteColor drop-shadow text-darkColor" @click="toggleDropdown">
    <button class="flex flex-row relative gap-2 items-center dropdown-btn text-center">
        <i class="fa-solid fa-sliders text-darkColor pl-2"></i>
        <div class="pr-2 text-sm md:text-base ">{{ selectedOption || 'Filters' }}</div>
    </button>

    <!-- Dropdown Menu -->
    <ul v-if="isOpen" class="dropdown-menu mt-2">
      <li
        v-for="option in options"
        :key="option"
        @click.stop="selectOption(option)"
        class="mt-1 dropdown-item poppins-medium hover:bg-primaryLightColor rounded-3xl px-6 text-[11px] md:text-sm py-2"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      isOpen: false, 
      selectedOption: null, 
      options: ["price: high-low", "price: low-high"], 
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false; 
    },
  },
};
</script>