//  Es un ejemplo, se importa el midleware, en la variable rutas hay un json con las rutas. 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Menu"),
  },
  // {
  //   path: "/view",
  //   name: "view",
  //   component: () => import("../components/Menu"),
  // },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register"),
  },
  {
    path: "/nosotros",
    name: "nosotros",
    component: () => import("../components/Nosotros.vue"),
  },
  {
    path: "/update",
    name: "update",
    component: () => import("../components/Update.vue"),
  },
  {
    path: "/info",
    name: "info",
    component: () => import("../components/InfoEstructuraDatos.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;