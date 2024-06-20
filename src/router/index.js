import { createRouter, createWebHistory } from "vue-router";
const routes = [
  { path: "/", name: "home", component: () => import("@/views/HomeView.vue") },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/RegistrationView.vue"),
  },
  {
    path: "/create-task",
    name: "create-task",
    component: () => import("@/views/TaskView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
