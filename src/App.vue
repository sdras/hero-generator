<template>
  <div id="app">
    <app-nav />
    <app-masthead />
    <app-bottom-drawer />
  </div>
</template>

<script>
import AppBottomDrawer from "./components/AppBottomDrawer.vue"
import AppMasthead from "./components/AppMasthead.vue"
import AppNav from "./components/AppNav.vue"

export default {
  components: {
    AppNav,
    AppMasthead,
    AppBottomDrawer,
  },
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
}
</style>
