<template>
  <section class="controls">
    <a-row>
      <a-col :span="3">
        <label for="buttonPadding">Button Padding</label>
      </a-col>
      <a-col :span="7">
        <a-slider :min="1" :max="50" v-model="buttonPadding" />
      </a-col>
      <a-col :span="4">
        <a-input-number
          :min="1"
          :max="50"
          id="buttonPadding"
          v-model="buttonPadding"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="3">
        <label for="titleSpacing">Title/Button Spacing</label>
      </a-col>
      <a-col :span="7">
        <a-slider :min="1" :max="300" v-model="titleSpacing" />
      </a-col>
      <a-col :span="4">
        <a-input-number
          :min="1"
          :max="300"
          id="titleSpacing"
          v-model="titleSpacing"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="3">
        <label for="gradientType">Gradient Overlay</label>
      </a-col>
      <a-col :span="11">
        <a-radio-group @change="onChange" v-model="value">
          <a-radio-button value="circular">Circular</a-radio-button>
          <a-radio-button value="up">Up</a-radio-button>
          <a-radio-button value="down">Down</a-radio-button>
          <a-radio-button value="diagonaldown">Diagonal ↘</a-radio-button>
          <a-radio-button value="diagonalup">Diagonal ↗</a-radio-button>
          <a-radio-button value="none">None</a-radio-button>
        </a-radio-group>
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
    }
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.value}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.controls {
  padding: 6vmin;
}

label {
  display: inline-block;
  margin-top: 5px;
}

.ant-input-number {
  margin-left: 16px;
}

.ant-row {
  margin-bottom: 15px;
}
</style>
