<template>
  <main>
    <aside><app-left-controls /></aside>
    <aside>
      <app-right-controls />
      <a-button type="danger">Please may I have some code</a-button>
    </aside>
  </main>
</template>

<script>
import AppRightControls from "@/components/AppRightControls.vue"
import AppLeftControls from "@/components/AppLeftControls.vue"

export default {
  components: {
    AppRightControls,
    AppLeftControls,
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 5vmin 8vmin;
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
