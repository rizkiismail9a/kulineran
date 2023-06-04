<template>
  <nav-bar :amount="amount"></nav-bar>
  <div class="container mt-3">
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
      <div class="col-md-4 rounded" v-for="(items, i) in products" :key="items.id">
        <div class="card food-card mb-3">
          <img v-bind:src="'/img/' + items.gambar" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ items.nama }}</h5>
            <p>Rp{{ items.harga }}</p>
            <button class="btn btn-success" @click="amount++, addChart(i)"><i class="fa-solid fa-cart-shopping me-2" style="color: #fff"></i>Pesan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
export default {
  data() {
    return {
      products: [],
      // charts: [],
      search: "",
      amount: 0,
    };
  },
  name: "Best-Products",
  components: {
    NavBar,
  },
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

    addChart(index) {
      axios
        .post("http://localhost:3000/charts", this.products[index])
        .then(() => alert("Pesanan Telah Masuk Keranjang!"))
        .catch((error) => console.log(error + "Ada yang salah, nih"));
      // this.charts.push(this.products[index]);
      // console.log(this.charts);
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
