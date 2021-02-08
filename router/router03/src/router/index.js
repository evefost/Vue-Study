import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./Home";
import About from "./About";
import HomeNews from "./HomeNews";

const HomeMessage = () => import( "./HomeMessage");

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home

  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    },
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
    component: About,
    meta: {
      title: "关于"
    }
  }
  ,
  {
    path: '/user/:userId/:age',
    component: () => import('./User.vue'),
    meta: {
      title: "用户"
    }
  },
  {
    path: '/profile',
    component: () => import('./Profile.vue'),
    meta: {
      title: "档案"
    },
    beforeEnter:(to,from,next)=>{
      console.log("路由独享守卫"+to.path);
    }
  }
]

const router = new VueRouter({
  routes
})
//前置勾子
router.beforeEach((to,from, next) => {
  document.title =to.matched[0].meta.title;
  console.log("全局前置守卫beforeEach"+to.path);
  next();
})
//后置勾子
router.afterEach((to,from)=>{
  console.log("全局后置守卫afterEach:"+to.path)
})
export default router;

