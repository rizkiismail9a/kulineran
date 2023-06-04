<template>
  <div class="container">
    <h3>Get <strong>Foods</strong> OwO</h3>
  </div>
  <!-- SearchBar -->
  <div class="container">
    <div class="input-group my-5">
      <input type="text" class="form-control" placeholder="cari masakan kesukaanmu" aria-label="Username" aria-describedby="basic-addon1" v-model="search" @keyup="searchProduct" />
      <span class="input-group-text" id="basic-addon1"> <i class="fa-solid fa-magnifying-glass" style="color: #555555"></i> </span>
    </div>
  </div>
  <!-- Foods -->
  <div class="container">
    <div class="food-wrapper row m-5">
      <div class="col-md-4 rounded" v-for="items in products" :key="items.id">
        <div class="card food-card mb-3">
          <img v-bind:src="'/img/' + items.gambar" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ items.nama }}</h5>
            <p>Rp{{ items.harga }}</p>
            <button class="btn btn-success">
              <router-link :to="'/menu/' + items.id"> <i class="fa-solid fa-cart-shopping me-2" style="color: #fff"></i>Pesan</router-link>
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
      products: [],
      search: "",
    };
  },
  name: "Best-Products",
  methods: {
    setProducts(data) {
      this.products = data;
    },
    searchProduct() {
      axios
        .get("http://localhost:3000/products?q=" + this.search)
        .then((res) => this.setProducts(res.data))
        .catch((error) => console.log(error + "Ada yang salah, nih"));
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => this.setProducts(res.data))
      .catch((error) => console.log(error + "Ada yang salah, nih"));
  },
};
</script>
