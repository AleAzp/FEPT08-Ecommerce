
<template>
  <div class="absolute right-0 dropdown border py-2 px-2 rounded-lg poppins-medium text-secondaryColor border-secondaryColor " @click="toggleDropdown">
    <button class="flex flex-row relative gap-2 items-center dropdown-btn text-center">
        <i class="fa-solid fa-sliders"></i>
        <div class="hidden sm:flex">{{ selectedOption || 'Filters' }}</div>
    </button>

    <!-- Dropdown Menu -->
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="option in options"
        :key="option"
        @click.stop="selectOption(option)"
        class=" dropdown-item poppins-medium hover:bg-primaryColor rounded-md px-4 text-[11px] md:text-sm my-3"
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
      options: ["By name", "price: high-low", "price: low-high"], 
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