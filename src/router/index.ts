import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Dashboard from "../views/dashboard/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
];

const router = createRouter({
  // @ts-ignore
  history: createWebHistory(import.meta!.env!.VITE_PUBLIC_PATH),
  routes,
});

export default router;
