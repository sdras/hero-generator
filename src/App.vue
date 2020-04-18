<template>
  <div id="app">
    <app-nav />
    <app-masthead />
    <app-controls />
  </div>
</template>

<script>
import AppMasthead from "./components/AppMasthead.vue"
import AppControls from "./components/AppControls.vue"
import AppNav from "./components/AppNav.vue"

export default {
  components: {
    AppNav,
    AppControls,
    AppMasthead,
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
