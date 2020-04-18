<template>
  <main>
    <app-controls />
    <aside>
      <h3>About this project</h3>
      <p>
        I've been asked to implement the same hero for several years now, so
        like a good lazy programmer, I figured I'd automate it. This generator
        is intended to get you going, I can't provide every value but the code
        generator should give you a good jumping off point to get you going
        faster :)
      </p>
      <p>
        But what does it do? It generates the code for the example above. If you
        upload an image, I'll run a serverless function that will optimize it
        and crop it to several sizes for responsive.
      </p>
      <a-button type="danger">Please may I have some code</a-button>
    </aside>
  </main>
</template>

<script>
import AppControls from "@/components/AppControls.vue"

export default {
  components: {
    AppControls,
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 6vmin 8vmin;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 30px;
}

.ant-btn-danger {
  margin: 20px 0;
  height: 48px;
  padding-bottom: 2px;
}
</style>
