<template>


  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    <div :class="{active: isActive}">-->
<!--      <slot name="item-text"></slot>-->
<!--    </div>-->
    <div  :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'blue'
    }
  },
  // data() {
  //   return {
  //     isActive: false
  //   }
  // },
  computed: {
    isActive() {
      //当前路由
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    itemClick() {
      console.log("path" + this.path);
      this.$router.replace(this.path);

     // this.$router.push({path: this.path})
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}

.tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: darkorchid;
}
</style>
