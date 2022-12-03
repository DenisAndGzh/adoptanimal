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
          path: "petinfo",
          name: "petinfo",
          meta: {
            title: "petinfo",
          },
          component: () => import("../views/PetView.vue"),
        },
        {
          path: "questionandanswer",
          name: "questionandanswer",
          meta: {
            title: "Q&A",
          },
          component: () => import("../views/QuestionAndAnswerView.vue"),
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
          path: "favorite",
          name: "favorite",
          meta: {
            title: "Favorite",
          },
          component: () => import("../views/FavoriteView.vue"),
        },
        {
          path: "search",
          name: "search",
          meta: {
            title: "Search",
          },
          component: () => import("../views/SearchView.vue"),
        },
      ],
    },
  ],
});

export default router;
