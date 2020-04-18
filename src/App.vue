<template>
  <div id="app">
    <app-nav />
    <app-masthead />
  </div>
</template>

<script>
import AppMasthead from "./components/AppMasthead.vue";
import AppNav from "./components/AppNav.vue";

export default {
  components: {
    AppNav,
    AppMasthead
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
