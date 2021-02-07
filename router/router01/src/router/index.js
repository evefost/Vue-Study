import Vue from 'vue'
import HelloWorld from "../components/HelloWorld";
import Router from 'vue-router'
import VueRouter from 'vue-router'

//把插件安装到Vue上
Vue.use(Router)
//配置路由信息
const routes=[
  {
    //表示把HelloWorld 映射到'/'路径
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
];
//创建Router 并导出
// export default new Router({
//   routes
//   ]
// })
//或
const router = new VueRouter({
    routes
  }
)
export default router
