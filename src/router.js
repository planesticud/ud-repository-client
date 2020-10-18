import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/users",
      name: "users",
      component: () => import("./components/Users/Users")
    },
    {
      path: "/users/add",
      name: "addusers",
      component: () => import("./components/Users/AddUsers")
    },
    {
      path: "/users/edit/:id",
      name: "editusers",
      component: () => import("./components/Users/EditUsers")
    },
    {
      path: "/users/detail/:id",
      name: "detailusers",
      component: () => import("./components/Users/DetailUsers")
    },
    {
      path: "/files",
      name: "files",
      component: () => import("./components/Files/Files")
    },
    {
      path: "/files/add",
      name: "addfiles",
      component: () => import("./components/Files/AddFiles")
    },
    {
      path: "/files/edit/:id",
      name: "editfiles",
      component: () => import("./components/Files/EditFiles")
    },
    {
      path: "/files/detail/:id",
      name: "detailfiles",
      component: () => import("./components/Files/DetailFiles")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/",
      name: "init",
      component: () => import("./components/Home")
    }
  ]
});
