<template>
  <nav>
    Made with 🌮 by
    <a href="https://twitter.com/sarah_edo">sarah_edo</a>
    <app-github-corner />
  </nav>
</template>

<script>
import AppGithubCorner from "./AppGithubCorner.vue";

export default {
  components: {
    AppGithubCorner
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  padding: 25px 40px;
  font-size: 18px;
}
</style>