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
  },
  {
    path: "/disenio-interfaces",
    name: "disenio-interfaces",
    component: () => import("../components/Diseno"),
  },
  {
    path: "/estructura-datos",
    name: "estructura-datos",
    component: () => import("../components/EstructuraDatos"),
  },
  {
    path: "/programacion",
    name: "programacion",
    component: () => import("../components/Programacion"),
  },
  {
    path: "/register-students",
    name: "register-students",
    component: () => import("../components/RegisterStudents"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;