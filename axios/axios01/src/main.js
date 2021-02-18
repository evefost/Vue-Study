// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

axios({
  url: "/api/gateway/api/config",
  method:'GET'
}).then(res => {
  console.log("请求成功:"+res);
}).catch(error => {
  console.log("请求失败:"+error);
});

