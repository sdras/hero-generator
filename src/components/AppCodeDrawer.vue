<template>
  <div>
    <a-button @click="showDrawer" type="danger">
      Please may I have some code
    </a-button>
    <a-drawer
      title="Code Output"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :width="500"
      :afterVisibleChange="afterVisibleChange"
    >
      <app-code-output />
    </a-drawer>
  </div>
</template>

<script>
import AppCodeOutput from "@/components/AppCodeOutput.vue"

export default {
  components: {
    AppCodeOutput,
  },
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    afterVisibleChange(val) {
      console.log("visible", val)
    },
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-btn-danger {
  margin: 20px 0;
  height: 48px;
  padding-bottom: 2px;
}
</style>
