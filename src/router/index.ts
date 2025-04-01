import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import StartPage from "@/pages/StartPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "start",
    component: StartPage,
  },
  {
    path: "/chapter1",
    name: "chapter1",
    component: () => import("@/pages/Chapter1PropEmit.vue"),
  },
  {
    path: "/chapter2",
    name: "chapter2",
    component: () => import("@/pages/Chapter2LifeCycle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
