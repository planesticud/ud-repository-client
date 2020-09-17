import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/files",
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
