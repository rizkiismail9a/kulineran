<template>
  <div class="row p-5 banner-wrapper">
    <div class="col jargon-wrapper mx-3">
      <p class="me-3 mt-5">Bad mood?</p>
      <p class="me-3">Bete?</p>
      <p class="me-3">Bawaannya pengin emosi?</p>
      <h2><strong> Eat!</strong> You Will Get Better!</h2>
      <p>Ayo! Pesan makanan favoritmu!</p>
      <button type="button" class="btn btn-success"><router-link to="/menu">&#8594; Pesan</router-link></button>
    </div>
    <div class="col ms-3 illustarion-banner">
      <img src="/img/ilustrasi.png" alt="Orang Lagi Makan" width="400" />
    </div>
  </div>
</template>
<script>
export default {
  name: "hero-banner",
};
</script>
<style scoped>
p {
  text-align: justify;
}
button {
  background-color: rgb(26, 180, 26);
}
/* BreakPoints */
@media (max-width: 767.98px) {
  .banner-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
  .illustarion-banner,
  .banner-wrapper {
    margin: 10px 0 !important;
    padding: 0 !important;
    width: 100vw;
  }
  .illustarion-banner img {
    width: 80%;
  }
}
</style>
