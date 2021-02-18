import  Vue from 'vue'
import Vuex from  'vuex'

//1 安装插件
Vue.use(Vuex)

//2.创建对象
const  store = new Vuex.Store({
  state: {
    counter:0
  },
  mutations:{
    //默认有state参数
    increment( state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions:{

  },
  modules:{

  }
})

//3.导出对象
export default store;
