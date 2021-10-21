import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
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
    // cmbnoe
    {
      path: "/filesbuscar",
      name: "filesbuscar",
      component: () => import("./components/Files/FilesBuscar")
    },
    {
      path: "/revisar",
      name: "revisar",
      component: () => import("./components/Revisar/Revisar")
    },
    {
      path: "/files/detail/:id",
      name: "valorar",
      component: () => import("./components/Revisar/DetailObserv")
    },
    //fin cmbnoe
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
      path: "/estadisticas",
      name: "estadisticas",
      component: () => import("./components/Estadisticas/Estadisticas")
    },
    //josedavid
    {
      path: "/stadistics",
      name: "stadistics",
      component: () => import("./components/Stadistics/Stadistics")
    },
    {
      path: "/stadistics/graficas",
      name: "grafica",
      component: () => import("./components/Stadistics/Graphics")
    },
    //end josedavid
    {
      path: "/home",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/",
      name: "init",
      component: () => import("./components/Home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login")
    }
  ]
});
router.beforeEach((to, from, next) => {
  let ls = localStorage.getItem('token');
  if (to.name !== 'login' && ls === null) next({ name: 'login' })
  else if (to.name === 'login' && ls !== null) next({ name: 'home' })
  else next()

});

export default router;