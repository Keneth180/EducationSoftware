//  Es un ejemplo, se importa el midleware, en la variable rutas hay un json con las rutas. 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../components/Home"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../components/Register"),
  },
  {
    path: "/inform",
    name: "inform",
    component: () => import("../components/Inform"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;