<template>
  <div id="app">
    <h2>----------App 内容--------</h2>
    <h2>{{$store.state.counter}}</h2>
<!--    <button @click="$store.state.counter++">+</button>-->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <h2>----------Vuex  内容--------</h2>
    <hello-vuex/>

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import HelloVuex from "./components/HelloWorld";
export default {
  name: 'App',
  components: {HelloVuex, HelloWorld},
  methods:{
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
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
</style>
