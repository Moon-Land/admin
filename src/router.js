import Vue from "vue";
import Router from "vue-router";

// TODO: dynamic import
import Login from "./views/Login.vue";
import Main from "./views/Main.vue";

import About from "./views/About.vue";
import Table from "./views/Table.vue";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/main",
      name: "main",
      component: Main,
      children: [
        {
          path: "about",
          name: "about",
          component: About
        },
        {
          path: "table",
          name: "Table",
          component: Table
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
    // TODO: 404 page
  ]
});

router.beforeEach((to, from, next) => {
  if (!localStorage.getItem("Z-TOKEN") && to.name !== "login") {
    next("/login");
  }
  next();
});

export default router;
