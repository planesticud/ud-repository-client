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
      path: "/roles",
      name: "roles",
      component: () => import("./components/Roles/Roles")
    },
    {
      path: "/roles/add",
      name: "addroles",
      component: () => import("./components/Roles/AddRoles")
    },
    {
      path: "/roles/edit/:id",
      name: "editroles",
      component: () => import("./components/Roles/EditRoles")
    },
    {
      path: "/roles/detail/:id",
      name: "detailroles",
      component: () => import("./components/Roles/DetailRoles")
    },

    {
      path: "/files",
      name: "files",
      component: () => import("./components/Files/FilesSearch")
    },
    {
      path: "/review",
      name: "review",
      component: () => import("./components/Review/Review")
    },
    {
      path: "/files/detail/:id",
      name: "score",
      component: () => import("./components/Review/DetailObserv")
    },

    {
      path: "/files/add",
      name: "addfiles",
      component: () => import("./components/Files/AddFiles.vue")
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
      component: () => import("./components/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("./components/Home")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./components/Login")
    },
    {
      path: "/colaborador",
      name: "colaborador",
      component: () => import("./views/Colaborador.vue")
    },
    {
      path: "/minimos",
      name: "minimos",
      component: () => import("./views/RecursosMinimos.vue")
    },
    {
      path: "/materiales",
      name: "materiales",
      component: () => import("./views/PublicacionMateriales.vue")
    },
    {
      path: "/licencias",
      name: "licencias",
      component: () => import("./views/TiposLicencia.vue")
    },


    
      
  ]
});

router.beforeEach((to, from, next) => {
  let ls = localStorage.getItem('token');
  if (to.name !== 'login' && to.name !== 'acercade' && to.name !== 'home' && ls === null && to.name !== 'colaborador' && to.name !== 'recursos' && to.name !== 'minimos' && to.name !== 'materiales' && to.name !== 'licencias')
    next({ name: 'login' })
  else if (to.name === 'login' && ls !== null)
    next({ name: 'home' })
  else
    next()

});

export default router;