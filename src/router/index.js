import Vue from "vue";
import Router from "vue-router";

import Index from "./../views/Index.vue";
import Login from "./../views/Login.vue";
import Favs from "./../views/Favs.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "Index", component: Index },
    { path: "/login", name: "Login", component: Login },
    { path: "/favs", name: "Favs", component: Favs }
  ]
});
