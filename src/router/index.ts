import { createRouter, createWebHistory } from "vue-router";
import MenuView from "../views/MenuView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MenuView,
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
    },
    {
      path: "/table",
      name: "table",
      component: () => import("../views/TableView.vue"),
    },
    {
      path: "/serve",
      name: "serve",
      component: () => import("../views/ServeView.vue"),
    },
    {
      path: "/cook",
      name: "cook",
      component: () => import("../views/CookView.vue"),
    },
    {
      path: "/cashier",
      name: "cashier",
      component: () => import("../views/CashierView.vue"),
    },

    {
      path: "/user",
      name: "user",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/user/UserView.vue"),
    },
  ],
});

export default router;
