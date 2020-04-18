<template>
  <div id="app">
    <app-nav />
    <app-masthead />
    <app-drawer />
  </div>
</template>

<script>
import AppMasthead from "./components/AppMasthead.vue"
import AppDrawer from "./components/AppDrawer.vue"
import AppNav from "./components/AppNav.vue"

export default {
  components: {
    AppNav,
    AppDrawer,
    AppMasthead,
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
}
</style>
