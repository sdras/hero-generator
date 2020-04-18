<template>
  <section>
    <a-row>
      <a-col :span="5">
        <label for="gradientType">Button</label>
      </a-col>
      <a-col :span="19">
        <a-switch
          id="gradientType"
          size="small"
          defaultChecked
          v-model="options.button"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="5">
        <label for="buttonColor">Button Color</label>
      </a-col>
      <a-col :span="19">
        <input type="color" v-model="options.buttonColor" id="buttonColor" />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="5">
        <label for="gradientColor">Gradient Color</label>
      </a-col>
      <a-col :span="19">
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
        gradientColor: "rgb(0, 0, 0)",
        button: true,
      },
    }
  },
}
</script>

<style lang="scss" scoped></style>
