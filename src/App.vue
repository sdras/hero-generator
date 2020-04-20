<template>
  <div id="app">
    <app-nav />
    <app-masthead />
    <app-bottom-drawer />
  </div>
</template>

<script>
import AppBottomDrawer from "./components/AppBottomDrawer.vue";
import AppMasthead from "./components/AppMasthead.vue";
import AppNav from "./components/AppNav.vue";

export default {
  components: {
    AppNav,
    AppMasthead,
    AppBottomDrawer
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  max-width: 100% !important;
  overflow-x: hidden !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

label {
  display: inline-block;
  margin-top: 5px;
}

.ant-row {
  margin-bottom: 20px;
}

@media screen and (max-width: 600px) {
  label {
    font-size: 14px;
  }
}
</style>
