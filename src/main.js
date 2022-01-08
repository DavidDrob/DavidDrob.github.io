import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import "./index.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./components/Home.vue"),
    },
    {
      path: "/projects",
      name: "Projects",
      component: () => import("./components/Project.vue"),
    },
    {
      path: "/tech",
      name: "Technology Stack",
      component: () => import("./components/Tech.vue"),
    },
  ],
});

createApp(App).use(router).mount("#app");
