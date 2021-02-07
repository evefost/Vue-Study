<template>
  <div id="tab-bar">
    <slot></slot>
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/home.svg">-->
<!--      <dev>首页</dev>-->
<!--    </div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/category.svg">-->
<!--      分类</div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/cart.svg">-->
<!--      购物车</div>-->
<!--    <div class="tab-bar-item">-->
<!--      <img src="../../assets/img/tabbar/profile.svg">-->
<!--      我的</div>-->

  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
}


</style>
