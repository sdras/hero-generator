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
          <a-radio-button value="circular">Circular</a-radio-button>
          <a-radio-button value="up">Up</a-radio-button>
          <a-radio-button value="down">Down</a-radio-button>
          <a-radio-button value="diagonaldown">↘</a-radio-button>
          <a-radio-button value="diagonalup">↗</a-radio-button>
          <a-radio-button value="none">None</a-radio-button>
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

    <a-row>
      <a-col :span="5">
        <label for="gradientType">Upload a new image</label>
      </a-col>
      <a-col :span="19">
        <a-upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :transformFile="transformFile"
        >
          <a-button> <a-icon type="upload" /> Upload </a-button>
        </a-upload>
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
    transformFile(file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const canvas = document.createElement("canvas")
          const img = document.createElement("img")
          img.src = reader.result
          img.onload = () => {
            const ctx = canvas.getContext("2d")
            ctx.drawImage(img, 0, 0)
            ctx.fillStyle = "red"
            ctx.textBaseline = "middle"
            ctx.fillText("Ant Design", 20, 20)
            canvas.toBlob(resolve)
          }
        }
      })
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
