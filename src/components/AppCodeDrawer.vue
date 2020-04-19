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

<style lang="scss">
.ant-btn-danger {
  margin: 20px 0;
  height: 48px;
  padding-bottom: 2px;
}

.ant-drawer-header,
.ant-drawer-body,
.ant-drawer-wrapper-body {
  background: #111 !important;
  color: rgb(159, 203, 211) !important;
}

.ant-drawer-title {
  color: rgb(159, 203, 211) !important;
}

.ant-drawer-header {
  border-bottom: 1px solid #282424;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
}
</style>
