<template>
  <div>
    <div v-if="loading">
      <p class="loadingMessage">Loading...</p>
    </div>
    <div v-if="error">
      <div class="errorMessage">
        <p>Error while fetching.</p>
        <div class="flex items-center justify-center h-full">
          <svg width="685" height="200" viewBox="0 0 685 685" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_195_918)">
          <path d="M172.359 229.288C312.453 151.663 234.696 5.13185 426.272 14.8991C624.326 24.9965 770.575 367.435 501.348 579.967C246.709 763.119 63.0286 517 42.1117 442.883C19.0027 361 32.265 306.914 172.359 229.288Z" fill="#E9FFDA"/>
          <rect x="152.457" y="154.081" width="252" height="61" transform="rotate(-6.76745 152.457 154.081)" fill="white"/>
          <path d="M163.29 217.118L411.416 187.673" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <path d="M191.053 521.759L148.149 160.203C147.656 156.05 150.623 152.285 154.775 151.792L317.561 132.474L395.195 123.262C399.348 122.769 403.113 125.736 403.606 129.889L412.975 208.838C413.468 212.991 417.233 215.958 421.386 215.465L487 207.679L491.501 207.145C495.653 206.652 499.419 209.619 499.912 213.771L510.173 300.24L532.11 485.1C532.346 487.094 531.781 489.101 530.538 490.678L504.031 524.323C501.443 527.608 496.683 528.173 493.398 525.585L459.031 498.509C455.746 495.921 450.986 496.486 448.398 499.771L415.358 541.708C412.77 544.993 408.01 545.558 404.725 542.97L362.788 509.93C359.503 507.342 354.743 507.907 352.155 511.192L325.079 545.559C322.491 548.843 317.731 549.408 314.446 546.82L280.079 519.745C276.795 517.157 272.034 517.722 269.446 521.007L242.37 555.373C239.783 558.658 235.022 559.223 231.737 556.635L193.886 526.815C192.309 525.572 191.29 523.754 191.053 521.759Z" stroke="#72B646" stroke-width="16.6578" stroke-linecap="round"/>
          <path d="M259.026 317.08L288.183 280.071" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <path d="M255.1 283.996L292.109 313.154" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <path d="M385.345 302.09L414.502 265.081" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <path d="M381.419 269.007L418.428 298.164" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <path d="M333.425 406.178C344.011 390.435 379.01 358.527 434.319 356.843" stroke="#72B646" stroke-width="12.1148" stroke-linecap="round"/>
          <circle cx="184.336" cy="181.897" r="11.3892" transform="rotate(-6.76745 184.336 181.897)" stroke="#72B646" stroke-width="5.9943"/>
          <circle cx="218.861" cy="177.8" r="11.3892" transform="rotate(-6.76745 218.861 177.8)" stroke="#72B646" stroke-width="5.9943"/>
          <circle cx="253.385" cy="173.703" r="11.3892" transform="rotate(-6.76745 253.385 173.703)" stroke="#72B646" stroke-width="5.9943"/>
          <path d="M159.006 217.753L410.243 187.939" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
          <path d="M401 124.5L496 207.5" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
       </g>
       <defs>
       <clipPath id="clip0_135_795">
       <rect width="685" height="685" fill="white"/>
       </clipPath>
       </defs>
       </svg>
       </div>
      </div>
    </div>
    <div v-if="!loading && !error && filteredProducts.length === 0">
      <div class="notFoundMessage">
        <p>No products found for "{{ query }}".</p>
        <div class="flex items-center justify-center h-full">
          <svg width="685" height="200" viewBox="0 0 685 685" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_200_1811)">
          <path d="M482.169 248.037C335.152 184.491 417.871 1.57156 228.169 30.0366C32.0535 59.4641 -71.386 432.902 217.345 618.071C488.682 775.43 647.4 512.52 660.965 436.712C675.951 352.96 629.186 311.582 482.169 248.037Z" fill="#E9FFDA"/>
          <path d="M127.983 225.084L125.546 186.952C125.203 181.579 127.425 176.36 131.538 172.884L133.748 171.016C136.817 168.423 140.704 167 144.722 167H261.258C264.043 167 266.786 167.684 269.245 168.993L335.255 204.126C337.714 205.434 340.457 206.119 343.242 206.119H536.234C539.351 206.119 542.408 206.976 545.071 208.596L548.084 210.43C553 213.421 556 218.759 556 224.513C556 233.619 548.619 241 539.513 241H144.948C135.98 241 128.555 234.034 127.983 225.084Z" fill="white"/>
          <circle cx="167.51" cy="205.272" r="12.392" transform="rotate(-0.811796 167.51 205.272)" stroke="#72B646" stroke-width="8"/>
          <circle cx="211.51" cy="205.272" r="12.392" transform="rotate(-0.811796 211.51 205.272)" stroke="#72B646" stroke-width="8"/>
          <circle cx="256.51" cy="205.272" r="12.392" transform="rotate(-0.811796 256.51 205.272)" stroke="#72B646" stroke-width="8"/>
          <path d="M127 504V238.243V181C127 171.611 134.611 164 144 164H259.92C262.709 164 265.455 164.686 267.917 165.998L334.521 201.502C336.983 202.814 339.729 203.5 342.518 203.5H542C551.389 203.5 559 211.111 559 220.5V504C559 513.389 551.389 521 542 521H144C134.611 521 127 513.389 127 504Z" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
          <path d="M128 246H559" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
          <circle cx="425" cy="388" r="101" fill="white" stroke="#72B646" stroke-width="16"/>
          <path d="M380.182 397.503L402.282 361.039" stroke="#72B646" stroke-width="10.9637" stroke-linecap="round"/>
          <path d="M373 368.221L409.464 390.321" stroke="#72B646" stroke-width="10.9637" stroke-linecap="round"/>
          <path d="M443.858 381.464L465.959 345" stroke="#72B646" stroke-width="10.9637" stroke-linecap="round"/>
          <path d="M436.677 352.182L473.141 374.283" stroke="#72B646" stroke-width="10.9637" stroke-linecap="round"/>
          <path d="M398.736 448.073C408.316 433.826 439.989 404.95 490.043 403.427" stroke="#72B646" stroke-width="10.9637" stroke-linecap="round"/>
          <path d="M519.25 573.268L468 484.5L491.383 471L542.633 559.768C546.36 566.225 544.148 574.481 537.691 578.209C531.234 581.937 522.978 579.725 519.25 573.268Z" fill="#E9FFDA" stroke="#72B646" stroke-width="16" stroke-linecap="round"/>
          <path d="M409 310.281C416.172 308.82 432.107 307.719 448 312.189" stroke="#72B646" stroke-width="11" stroke-linecap="round"/>
          <path d="M465 320.189C466.574 320.698 465.176 320.307 467.393 321.29" stroke="#72B646" stroke-width="11" stroke-linecap="round"/>
       </g>
       <defs>
       <clipPath id="clip0_135_795">
       <rect width="685" height="685" fill="white"/>
       </clipPath>
       </defs>
       </svg>
       </div>
      </div>
    </div>
    <div v-else class="productsGrid">
      <ProductCard :products="filteredProducts"/>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { useProductsAllStore} from '../stores/productStore';

export default {
  name: "SearchResults",
  components: {
    ProductCard,
  },
  computed: {
    store() {
      return useProductsAllStore();
    },
    query() {
      return this.$route.query.q || ""; // Retrieve query from the URL
    },
    filteredProducts() {
      return this.store.filterSearch(this.query);
    },
    loading() {
      return this.store.loading;
    },
    error() {
      return this.store.error;
    },
  },
};
</script>

<style>
  
</style>
