import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LevelsView from "@/views/LevelsView.vue";
import AreaView from "@/views/AreaView.vue";
import EndView from "@/views/EndView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/levels",
    name: "levels",
    component: LevelsView,
  },
  {
    path: "/:id",
    name: "AreaView",
    component: AreaView
  },
  {
    path: "/end",
    name: "EndView",
    component: EndView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
