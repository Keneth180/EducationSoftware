//  Es un ejemplo, se importa el midleware, en la variable rutas hay un json con las rutas. 
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    name: "inicio-sesion",
    component: () => import("../components/IniciarSesion"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../components/Home"),
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
    path: "/edit/:id",
    name: "edit",
    component: () => import("../components/ActualizarEstructura"),
  },
  {
    path: "/edit-prog/:id",
    name: "edit-prog",
    component: () => import("../components/ActualizarProg"),
  },
  {
    path: "/edit-disenio/:id",
    name: "edit-disenio",
    component: () => import("../components/ActualizarDisenio"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;