<template>
  <main>
    <aside>
      <app-left-controls />
    </aside>
    <aside>
      <app-right-controls />
      <app-code-drawer />
    </aside>
    <aside>
      <h3>About this project</h3>
      <p>
        I've had to implement the same hero for several years now, so like a
        good lazy programmer, I figured I'd automate it. This generator is
        intended to get you going, it doesn't provide every value but the code
        output should give you a nice jumping off point :)
      </p>
      <p>What does it do? It generates the code for the example above based on your preferences.</p>
    </aside>
  </main>
</template>

<script>
import AppRightControls from "@/components/AppRightControls.vue";
import AppLeftControls from "@/components/AppLeftControls.vue";
import AppCodeDrawer from "@/components/AppCodeDrawer.vue";

export default {
  components: {
    AppRightControls,
    AppLeftControls,
    AppCodeDrawer
  }
};
</script>

<style lang="scss" scoped>
main {
  padding: 5vmin 8vmin;
  display: grid;
  grid-template-columns: 5fr 2fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}

@media screen and (max-width: 1000px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr;
    grid-column-gap: 0;
  }
}

@media screen and (max-width: 600px) {
  main {
    padding: 4vmin 4vmin;
  }
}
</style>
