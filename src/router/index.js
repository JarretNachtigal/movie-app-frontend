import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import MoviesIndex from "../views/MoviesIndex.vue";
import MoviesShow from "../views/MoviesShow.vue";
import MoviesCreate from "../views/MoviesCreate.vue";
import MoviesEdit from "../views/MoviesEdit.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/movies", name: "MoviesIndex", component: MoviesIndex },
  { path: "/movies/create", name: "MoviesCreate", component: MoviesCreate },
  { path: "/movies/:id", name: "MoviesShow", component: MoviesShow },
  { path: "/movies/:id/edit", name: "MoviesEdit", component: MoviesEdit },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
