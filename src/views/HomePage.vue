<template>
  <div class="container">
    <hero-banner></hero-banner>
  </div>
  <div class="container">
    <best-products />
  </div>
</template>
<script>
import HeroBanner from "../components/HeroBanner.vue";
import BestProducts from "../components/BestProducts.vue";
export default {
  name: "home-page",
  components: {
    HeroBanner,
    BestProducts,
  },
};
</script>
