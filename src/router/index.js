//  Es un ejemplo, se importa el midleware, en la variable rutas hay un json con las rutas. 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/view",
    name: "view",
    component: () => import("../components/Menu"),
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/Register"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;