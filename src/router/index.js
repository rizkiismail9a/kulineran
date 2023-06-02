import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Kulineran || Home",
      component: () => import("../views/HomePage"),
    },
    {
      path: "/menu",
      name: "Kulineran || Menu",
      component: () => import("../views/FoodsMenu"),
    },
    // Jika ada yang salah ketik laman atau laman sudah tidak ada
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound"),
    },
  ],
});
router.beforeEach((to, from, next) => {
  document.title = to.name;
  next();
});
export default router;
