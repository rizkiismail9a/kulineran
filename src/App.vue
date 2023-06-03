<template>
  <div class="navbar">
    <nav-bar></nav-bar>
  </div>
  <router-view />
  <footer-page></footer-page>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooterPage from "./components/FooterPage.vue";

export default {
  name: "App",
  components: {
    NavBar,
    FooterPage,
  },
};
</script>
