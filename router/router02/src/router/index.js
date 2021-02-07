import Vue from 'vue'
import Router from 'vue-router'
import Home from "./Home";
import About from "./About";
import HomeNews from "./HomeNews";
const HomeMessage = () => import( "./HomeMessage");

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home

  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About
  }
  ,
  {
    path: '/user/:userId/:age',
    component: () => import('./User.vue')
  },
  {
    path: '/profile',
    component: () => import('./Profile.vue')
  }
]
export default new Router({
  routes
})
