<template>
  <nav>
    Made by
    <a href="https://twitter.com/sarah_edo">sarah_edo</a>, deployed on
    <a
      href="https://www.netlify.com/?utm_source=proj&utm_medium=hero-sd&utm_campaign=devex"
    >Netlify</a>
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
  font-family: "Whitney A", "Whitney B";
  font-style: italic;
  font-weight: 600;
}

@media screen and (max-width: 600px) {
  nav {
    padding: 15px 20px;
  }
}
</style>
