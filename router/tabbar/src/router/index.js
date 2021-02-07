import Vue from 'vue'
import Router from 'vue-router'

const Cart = () => import("../views/cart/Cart");
const Home = () => import('../views/home/Home');
const Category = () => import( "../views/category/Category");
const Profile = () => import( "../views/profile/Profile");

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
];
Vue.use(Router)
//处理重复由路js报错
const RouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return RouterPush.call(this, to).catch(err => err)
}

//使用replace的方法
const RouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return RouterReplace.call(this, to).catch(err => err)
}
export default new Router({
  routes
})
