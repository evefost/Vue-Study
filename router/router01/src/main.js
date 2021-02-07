// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//自动找index.js
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
/*runtime compler*/
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

