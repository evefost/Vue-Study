## 全局导航守卫

### VueRouter
    beforeEach(guard: NavigationGuard): Function
    beforeResolve(guard: NavigationGuard): Function
    afterEach(hook: (to: Route, from: Route) => any): Function
    push(location: RawLocation): Promise<Route>
    replace(location: RawLocation): Promise<Route>

### NavigationGuard
    export type NavigationGuard<V extends Vue = Vue> = (
        to: Route,
        from: Route,
        next: NavigationGuardNext<V>
      ) => any

### 使用
#### 1.全局守卫
    路由配置元数据
    {
      path: '/home',
      component: Home,
      meta: {
      title: "首页"
    }
    //前置勾子
    router.beforeEach((to,from, next) => {
      document.title =to.matched[0].meta.title;
      console.log("跳转到"+to.path);
      next();
    })
#### 路由独享守卫
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
#### keep-alive
    keep-alive Vue内置组件，用于保留状态或避免重新渲染
    保存router-view状态，如果把router-view 直接包在keep-alive里面，所有路径匹配到的视图
    都会被缓存
    ## 观察组件创建与销毁
      created() {
        console.log("Home created");
      },
      destroyed() {
        console.log("Home destroyed");
      }
