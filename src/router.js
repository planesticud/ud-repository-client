import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/index",
      name: "index",
      component: () => import("./components/Home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login")
    },

    {
      path: "/files",
      name: "files",
      component: () => import("./components/FilesList")
    },
    {
      path: "/files/:id",
      name: "files-details",
      component: () => import("./components/File")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddFiles")
    }
  ]
});

router.beforeEach((to, from, next) => {
  let ls = localStorage.getItem('token');
  
  console.log(to.name)
  if (to.name !=='login' && ls === null) next({name:'login'})
  else if (to.name ==='login' && ls!== null) next({name:'files'})
  else next()

});

export default router;