import { createRouter, createWebHistory } from "vue-router";
import LayoutView from "../views/LayoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: LayoutView,
      redirect: "home",
      children: [
        {
          path: "home",
          name: "home",
          meta: {
            title: "Home",
          },
          component: () => import("../views/HomeView.vue"),
        },
        {
          path: "adopt",
          name: "adopt",
          meta: {
            title: "Adopt",
          },
          component: () => import("../views/AdoptView.vue"),
        },
        {
          path: "lostanimals",
          name: "lostanimals",
          meta: {
            title: "Lost Animals",
          },
          component: () => import("../views/LostAnimalsView.vue"),
        },
        {
          path: "contact",
          name: "contact",
          meta: {
            title: "Contact",
          },
          component: () => import("../views/ContactView.vue"),
        },
        {
          path: "donate",
          name: "donate",
          meta: {
            title: "Donate",
          },
          component: () => import("../views/DonateView.vue"),
        },
      ],
    },
  ],
});

export default router;
