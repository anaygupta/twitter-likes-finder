import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";

import Product from "../views/Public/Product.vue";

const routes = [
  // Public Views
  {
    path: "/",
    name: "Product",
    component: Product,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Public/About.vue"),
  },
  //   Authentication Views
  {
    path: "/login",
    name: "Log in",
    component: () => import("../views/Public/Login.vue"),
  },
  {
    path: "/signup",
    name: "Sign up",
    component: () => import("../views/Public/Signup.vue"),
  },

  // Authenticated Views
  {
    path: "/inbox",
    name: "Inbox",
    component: () => import("../views/Authenticated/Inbox.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/matters",
    name: "Matters",
    component: () => import("../views/Authenticated/Matters.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../views/Authenticated/Clients.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Authenticated/Profile.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = store.state.user;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !loggedIn) {
    next("/login");
  }

  next();
});

export default router;
