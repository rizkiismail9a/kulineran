import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.css";
// Kasih tahu aplikasi, kalau kita pakai router

const app = createApp(App);
app.use(router);
app.mount("#app");
