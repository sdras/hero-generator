<template>
  <main>
    <aside><app-left-controls /></aside>
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
      <p>
        But what does it do? It generates the code for the example above. If you
        upload an image, I'll run a serverless function that will optimize it
        and crop it to several sizes for responsive.
      </p>
    </aside>
  </main>
</template>

<script>
import AppRightControls from "@/components/AppRightControls.vue"
import AppLeftControls from "@/components/AppLeftControls.vue"
import AppCodeDrawer from "@/components/AppCodeDrawer.vue"

export default {
  components: {
    AppRightControls,
    AppLeftControls,
    AppCodeDrawer,
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 5vmin 8vmin;
  display: grid;
  grid-template-columns: 5fr 2fr 3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}
</style>
