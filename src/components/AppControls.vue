<template>
  <section class="controls">
    <a-row>
      <a-col :span="5">
        <label for="buttonPadding">Button Padding</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="1" :max="50" v-model="buttonPadding" />
      </a-col>
      <a-col :span="6">
        <a-input-number
          :min="1"
          :max="50"
          id="buttonPadding"
          v-model="buttonPadding"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="5">
        <label for="titleSpacing">Title/Button Spacing</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="1" :max="300" v-model="titleSpacing" />
      </a-col>
      <a-col :span="6">
        <a-input-number
          :min="1"
          :max="300"
          id="titleSpacing"
          v-model="titleSpacing"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="5">
        <label for="gradientType">Gradient Overlay</label>
      </a-col>
      <a-col :span="19">
        <a-radio-group @change="onChange" v-model="value">
          <a-radio value="circular">Circular</a-radio>
          <a-radio value="up">Up</a-radio>
          <a-radio value="down">Down</a-radio>
          <a-radio value="diagonaldown">↘</a-radio>
          <a-radio value="diagonalup">↗</a-radio>
          <a-radio value="none">None</a-radio>
        </a-radio-group>
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="5">
        <label for="gradientType">Button</label>
      </a-col>
      <a-col :span="19">
        <a-switch size="small" defaultChecked @change="onChangeButton" />
      </a-col>
    </a-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      buttonPadding: 5,
      titleSpacing: 40,
      value: "circular",
      checked: true,
    }
  },
  methods: {
    onChange(e) {
      console.log("radio checked", e.target.value)
    },
    onChangeButton(checked) {
      console.log(`a-switch to ${checked}`)
    },
  },
}
</script>

<style lang="scss" scoped>
label {
  display: inline-block;
  margin-top: 5px;
}

.ant-input-number {
  margin-left: 16px;
}

.ant-row {
  margin-bottom: 20px;
}
</style>
