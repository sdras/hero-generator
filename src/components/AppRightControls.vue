<template>
  <section>
    <a-row>
      <a-col :span="12">
        <label for="gradientType">Button</label>
      </a-col>
      <a-col :span="12">
        <a-switch
          id="gradientType"
          style="background: #63b6b8"
          size="small"
          defaultChecked
          v-model="options.button"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <label for="buttonColor">Button Color</label>
      </a-col>
      <a-col :span="12">
        <input type="color" v-model="options.buttonColor" id="buttonColor" />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <label for="buttonHoverColor">Button Hover Color</label>
      </a-col>
      <a-col :span="12">
        <input type="color" v-model="options.buttonHoverColor" id="buttonHoverColor" />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="12">
        <label for="gradientColor">Gradient Color</label>
      </a-col>
      <a-col :span="12">
        <input
          type="color"
          v-model="options.gradientColor"
          id="gradientColor"
        />
      </a-col>
    </a-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: {
        buttonColor: "#098191",
        gradientColor: "#000000",
        buttonHoverColor: '#63b6b8',
        button: true,
      },
    }
  },
  watch: {
    options: {
      deep: true,
      handler(newValue) {
        this.$store.commit("updateRightOptions", newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
