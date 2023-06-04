<template>
  <nav-bar :amount="amount"></nav-bar>
  <div class="container">
    <hero-banner></hero-banner>
  </div>
  <div class="container">
    <best-products @tambahJumlah="amount++" @postKeDB="addChart(i)" />
  </div>
</template>
<script>
import HeroBanner from "../components/HeroBanner.vue";
import BestProducts from "../components/BestProducts.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "home-page",
  data() {
    return {
      amount: 0,
    };
  },
  components: {
    HeroBanner,
    BestProducts,
    NavBar,
  },
};
</script>
