import Vue from "vue";
import Router from "vue-router";

// TODO: dynamic import
import Login from "./views/Login";
import Main from "./views/Main";

import About from "./views/About";
import Table from "./views/Table";
import Analysis from "./views/Analysis";
import Editor from "./views/Editor";
import Settings, { Base, Security } from "./views/Settings";

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
          name: "table",
          component: Table
        },
        {
          path: "analysis",
          name: "analysis",
          component: Analysis
        },
        {
          path: "editor",
          name: "editor",
          component: Editor
        },
        {
          path: "settings",
          name: "settings",
          component: Settings,
          children: [
            {
              path: "base",
              component: Base
            },
            {
              path: "security",
              component: Security
            }
          ]
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
