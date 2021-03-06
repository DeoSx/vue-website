import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("../views/Catalog.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/Cart.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
