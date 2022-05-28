<template>
  <div id="public-nav">
    <PublicNav />
  </div>
  <!-- <div id="authenticated-nav">
    <AuthenticatedNav />
  </div> -->

  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
import PublicNav from "@/components/Nav/PublicNav.vue";
// import AuthenticatedNav from "@/components/Nav/AuthenticatedNav.vue";

export default {
  components: {
    PublicNav,
    // AuthenticatedNav,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");

#app {
  font-family: Inter, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
