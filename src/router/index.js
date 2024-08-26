import Vue from "vue";
import VueRouter from "vue-router";
import goTo from "vuetify/es5/services/goto";
import Missing from "../views/404.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "El Salvador - Municipios",
    },
  },
  {
    path: "*",
    component: Missing,
    meta: {
      title: "404",
    },
  },
];

const router = new VueRouter({
  mode: "hash", // Cambia a hash para evitar problemas con rutas en GitHub Pages
  routes,
});

export default router;
