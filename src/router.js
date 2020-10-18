import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/users",
      name: "users",
      component: () => import("./components/Users")
    },
    {
      path: "/users/add",
      name: "addusers",
      component: () => import("./components/AddUsers")
    },
    {
      path: "/users/edit/:id",
      name: "editusers",
      component: () => import("./components/EditUsers")
    },
    {
      path: "/users/detail/:id",
      name: "detailusers",
      component: () => import("./components/DetailUsers")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home")
    }
  ]
});
