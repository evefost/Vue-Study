## vue-router 基本使用
### 项目初始化
    执行 vue init webpack router01 (2.x模板
    或 vue create router01 （3.x cli 简单方便，简化配置
    在项目中安装 webpack：
      # --save-dev: 安装到项目的依赖中
      npm install --save-dev webpack
    # 或 -g: 全局安装
      npm install -g webpack
### 1.在index.js中引入 插件

    在index.js 文件里
    import Router from 'vue-router' 或
    import VueRouter from 'vue-router'
    VueRouter 继承于Router 两者使用差不多

### 2.把插件安装到Vue上:

    在index.js 文件里 加上 Vue.use(Router)

### 3 .配置路由信息

    const routes=[
      {
        //表示把组件HelloWorld 映射到'/'路径
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ];

### 4.创建Router 实例,

    创建，并载上面的配置的路由信息，并导出
      export default new Router({
        routes
      })

### 5.挂router 到vue上

    在main.js 上 创建Vue实例
    new Vue({
      el: '#app',
      //挂载router
      router,
      components: { App },
      template: '<App/>'
    })
    或
    new Vue({
      render: h => h(App),
      router
    }).$mount('#app')

