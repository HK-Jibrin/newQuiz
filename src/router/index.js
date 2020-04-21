import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Question from "../components/Question.vue";
import Answers from "../components/Answers.vue";
import notFound from "../components/notFound.vue";

Vue.use(VueRouter)
 const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    redirect: 'questions',
  },
  {
    path: "/question/:level",
    component: Question,
    props: true,
    beforeEnter: (to, from, next) => {
      const level = to.params.level;
      if (!["easy", "medium", "hard"].includes(level)) next("/questions");
      next();
    }
  },
  { path: "/answers",
   component: Answers 
  },
  { path: "*",
   component: notFound
   },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
