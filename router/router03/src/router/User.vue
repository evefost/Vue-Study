<template>
  <div>
    <h1>姓名: {{this.$route.params.userId}}</h1>
    <h1>年龄: {{this.$route.params.age}}</h1>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>

</style>
