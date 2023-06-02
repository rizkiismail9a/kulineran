<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand font" href="#">Kulineran</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active font" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link font" to="/menu">Foods</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active font" aria-current="page" to="/chart">
              <span class="me-2">Keranjang</span>
              <i class="fa-solid fa-cart-shopping me-2" style="color: #ff8000"></i>
              <span class="amount">0</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.font {
  /* font-family: "Dancing Script", cursive; */
  font-size: 1rem;
}
.amount {
  background-color: rgb(26, 180, 26);
  display: inline-block;
  width: 15px;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 4px;
}
</style>
