<template>
  <router-view />
  <footer-page></footer-page>
</template>

<script>
import FooterPage from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    FooterPage,
  },
};
</script>
