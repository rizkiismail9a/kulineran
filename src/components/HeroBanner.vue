<template>
  <div class="row p-5">
    <div class="col jargon-wrapper mx-3">
      <p class="me-3 mt-5">
        Bad mood? <br />
        Lagi Bete? <br />
        Bawaannya pengin emosi?
      </p>
      <h2><strong> Eat!</strong> You Will Get Better!</h2>
      <p>Ayo! Pesan makanan favoritmu!</p>
      <button type="button" class="btn btn-success"><router-link to="/menu">&#8594; Pesan</router-link></button>
    </div>
    <div class="col ms-3">
      <img src="../assets/img/ilustrasi.png" alt="Orang Lagi Makan" width="400" />
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
</style>
