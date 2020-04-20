<template>
  <div>
    <a-button @click="showDrawer" type="danger">Please may I have some code</a-button>
    <a-drawer
      class="codeoutput"
      title="Code Output"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :width="500"
    >
      <app-code-output />
    </a-drawer>
  </div>
</template>

<script>
import AppCodeOutput from "@/components/AppCodeOutput.vue";

export default {
  components: {
    AppCodeOutput
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style lang="scss">
.ant-btn-danger {
  margin: 20px 0;
  height: 41px !important;
  padding-bottom: 2px;
}

.ant-drawer-body,
.ant-drawer-wrapper-body {
  background: #111 !important;
  color: rgb(159, 203, 211) !important;
}

.ant-drawer-title {
  color: #ffffff !important;
}

.ant-drawer-header {
  border-bottom: 1px solid #222526 !important;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
  background: #111 !important;
}

.codeoutput {
  position: relative;
}

@media screen and (max-width: 600px) {
  .ant-drawer-content-wrapper {
    width: 80vw !important;
  }
}
</style>
