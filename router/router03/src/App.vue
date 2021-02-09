<template>
  <div id="app">

    <router-link to="/home"  >首页</router-link>
    <router-link to="/about" >关于</router-link>
    <router-link :to="'/user/'+userId+'/'+age"  >用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'xieyang',age:18}}" >档案</router-link>
<!--    <button @click="homeClick">首页</button> -->
<!--    <button @click="aboutClick">关于</button>-->
    <!--    占位-->
    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsang',
      age:18
    }
  },
  methods: {
    homeClick(){
      console.log("homeClick");
      //重复push会报错
      if(this.$router.currentRoute.path=="/home"){
        return;
      }
      this.$router.push("/home")
    },
    aboutClick(){
      console.log( this.$router.currentRoute.path);
      if(this.$router.currentRoute.path=="/about"){
        return;
      }
      this.$router.push("/about")
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-active{
  color: red;

}
.active{
  color: green;

}
</style>
