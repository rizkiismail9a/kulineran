<template>
  <div class="p-5">
    <div class="col food-container d-flex justify-content-between">
      <h5>Our Most <strong>Favorited</strong></h5>
      <button class="btn btn-success"><router-link to="/menu">Lihat Semua</router-link></button>
    </div>
    <div class="food-wrapper row my-5 mx-auto">
      <div class="col-md-4 rounded" v-for="items in bestFoods" :key="items.id">
        <div class="card food-card" style="width: 18rem">
          <img v-bind:src="'/img/' + items.gambar" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ items.nama }}</h5>
            <p>Rp{{ items.harga }}</p>
            <p>Lorem, ipsum.</p>
            <button class="btn btn-success">
              <router-link to="/chart"> <i class="fa-solid fa-cart-shopping me-2" style="color: #fff"></i>Pesan</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      bestFoods: [],
    };
  },
  name: "Best-Products",
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((res) => (this.bestFoods = res.data))
      .catch((error) => console.log(error + "Ada yang salah, nih"));
  },
};
</script>
