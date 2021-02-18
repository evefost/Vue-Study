// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import {request} from "./network/request";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
//全局配置
axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.timeout = 2000
// 1.基本使用
// axios({
//   url: "/api/gateway/api/config",
//   //默认get 请求
//   method: "get"
// }).then(res => {
//   console.log("请求成功:", res);
// }).catch(error => {
//   console.log("请求失败:", error);
// });


// axios({
//   url: "/api/gateway/api/config",
//   //专门对get 传参
//   params: {
//     type: '1',
//     page: 2
//   }
// }).then(res => {
//   console.log("请求成功:", res);
// })

// 2.并发请求，同步返回
// axios.all([axios({
//   url: "/api/gateway/api/config",
// }),axios({
//   url: "/api/gateway/api/config",
//   params: {
//     type: '1',
//     page: 2
//   }
// })]).then(res=>{
//   console.log("并发请求成功[0]:",res[0]);
//   console.log("并发请求成功[1]:",res[1]);
// })

// axios.all([axios({
//   url: "/api/gateway/api/config",
// }), axios({
//   url: "/api/gateway/api/config",
//   params: {
//     type: '1',
//     page: 2
//   }
// })]).then(axios.spread((res1, res2) => {
//   console.log("并发请求成功[0]:", res1);
//   console.log("并发请求成功[1]:", res2);
// }))

//4.创建对应的axios实例，独立配置
// const instance1 = axios.create({
//   baseURL: 'http://localhost:8080',
//   timeout: 5000
// })

// instance1({
//   url: "/api/gateway/api/config",
//   //专门对get 传参
//   params: {
//     type: '1',
//     page: 2
//   }
// }).then(res => {
//   console.log("对应实例请求成功:", res);
// })
//5 分离封装
request({
  url: "/api/gateway/api/config",
  headers: {'token': 'ttttttt','name': 'foobar'}

})
  .then(res => {
    console.log("成功", res);
  }).catch(error => {
  console.log("失败", error);
})
