<template>
  <div class="container">
    <hero-banner></hero-banner>
  </div>
</template>
<script>
import HeroBanner from "../components/HeroBanner.vue";
export default {
  name: "home-page",
  components: {
    HeroBanner,
  },
};
</script>
