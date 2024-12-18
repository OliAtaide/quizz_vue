import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LevelsView from "@/views/LevelsView.vue";
import AreaView from "@/views/AreaView.vue";
import EndView from "@/views/EndView.vue";
import ResultFile from "@/views/ResultFile.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/levels",
    name: "Levels",
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
  },
  {
    path: "/result",
    name: "Result",
    component: ResultFile
  }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
