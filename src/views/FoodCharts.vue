<template>
  <div class="container col pt-5">
    <nav aria-label="breadcrumb ">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="/">Home</a></li>
        <li class="breadcrumb-item"><a href="/menu">Foods</a></li>
        <li class="breadcrumb-item active" aria-current="page">Charts</li>
      </ol>
    </nav>
  </div>
  <div class="container my-5" id="food">
    <div class="row text-center" v-if="products.length === 0">
      <h1>Kamu Belum Beli Apapun 👀</h1>
    </div>
    <div class="row food-wrapper m-5" v-for="(items, i) in products" :key="items.id">
      <div class="col-md-6 food-img text-center my-3">
        <img class="rounded" :src="'/img/' + items.gambar" :alt="items.nama" />
      </div>
      <div class="col-md-6 food-info">
        <div class="row">
          <h2>
            <strong>{{ items.nama }}</strong>
          </h2>
          <h5>
            Harga: <strong>Rp{{ items.harga }},00</strong>
          </h5>
          <form class="row amountOfOreder my-3">
            <label for="total" class="my-2">Jumlah Pesanan</label>
            <input type="number" id="total" v-model="amount[i]" min="1" @change="subtotal" />
            <label for="desc" class="my-2">Keterangan</label>
            <textarea type="number" id="desc" placeholder="Misal: 'Kasih sangat pedas pokoknya!'"></textarea>
            <div class="d-flex justify-content-between mt-5">
              <h5>
                Subtotal:
                <strong class="subtotal">{{ amount[i] * items.harga }} </strong>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="checkout d-flex">
      <h5 class="mx-5 mt-2">
        Total: Rp<strong>{{ total }} </strong>
      </h5>
      <button v-if="products.length !== 0" class="btn btn-success" @click="clear">Checkout</button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "food-chart",

  data() {
    return {
      products: [],
      amount: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      total: 0,
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
    clear() {
      for (let i = 0; i < this.products.length; i++) {
        axios.delete("http://localhost:3000/charts/" + this.products[i].id);
      }
      alert("Pesanan Kamu Siap Diproses!");
      document.getElementById("food").innerHTML = "<h2 class='text-center'>Gas, pesen lagi OWO</h2>";
    },
    subtotal() {
      this.total = 0;
      const subtotal = document.querySelectorAll(".subtotal");

      for (let i = 0; i < subtotal.length; i++) {
        const subtotalInt = parseInt(subtotal[i].textContent);
        this.total += subtotalInt;
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/charts/")
      .then((res) => this.setProducts(res.data))
      .catch((error) => console.log(error + "Ada yang salah, nih"));
  },
};
</script>
<style scoped>
.breadcrumb-item a {
  color: black !important;
}
.food-wrapper {
  width: 100%;
  margin: 0 auto !important;
}
.food-img img {
  width: 90%;
  background-color: aquamarine;
}
.food-info h2 {
  border-bottom: 0.5px solid grey;
  padding-bottom: 12px;
}
textarea {
  resize: none;
}
.checkout {
  float: right;
}

@media (max-width: 767.98px) {
  .food-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .food-img,
  .food-info {
    margin: 10px 0 !important;
    padding: 0 !important;
    width: 100vw;
  }
  .food-img img {
    width: 100%;
  }
}
</style>
