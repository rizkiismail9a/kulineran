<template>
  <div class="container my-5">
    <div class="row food-wrapper m-5">
      <div class="col-md-6 food-img text-center">
        <img class="rounded" :src="'/img/' + products.gambar" :alt="products.nama" />
      </div>
      <div class="col-md-6 food-info">
        <div class="row">
          <h2>
            <strong>{{ products.nama }}</strong>
          </h2>
          <h5>
            Harga: <strong>Rp{{ products.harga }},00</strong>
          </h5>
          <form class="row amountOfOreder my-3">
            <label for="total" class="my-2">Jumlah Pesanan</label>
            <input type="number" id="total" v-model="amount" min="1" />
            <label for="desc" class="my-2">Keterangan</label>
            <textarea type="number" id="desc" placeholder="Misal: 'Kasih sangat pedas pokoknya!'"></textarea>
            <div class="d-flex justify-content-between mt-5">
              <h5>
                Total:
                <strong>Rp{{ amount * products.harga }},00 </strong>
              </h5>
              <button class="btn btn-success">Checkout</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "food-detail",
  props: ["id"],
  data() {
    return {
      products: [],
      amount: 1,
    };
  },
  methods: {
    setProducts(data) {
      this.products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/products/" + this.id)
      .then((res) => this.setProducts(res.data))
      .catch((error) => console.log(error + "Ada yang salah, nih"));
  },
};
</script>
<style scoped>
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
