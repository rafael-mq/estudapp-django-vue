import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import StudenHome from "../views/StudentHome.vue"
import TeacherSearch from "../views/TeacherSearch.vue";
import Settings from "../views/Settings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    // name: "Home",
    name: "Student Home",
    // component: Home
    component: StudenHome
  },
  {
    path: "/search-teacher",
    name: "SearchTeacher",
    component: TeacherSearch,
  },
  {
    path: "/student-dash",
    name: "StudenHome",
    component: StudenHome,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
