<template>
  <section class="controls">
    <a-row>
      <a-col :span="6">
        <label for="gradientType">Gradient Overlay</label>
      </a-col>
      <a-col :span="18">
        <a-radio-group v-model="options.gradientOverlay">
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
      <a-col :span="6">
        <label for="buttonRadius">Button Radius</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="1" :max="50" v-model="options.buttonRadius" />
      </a-col>
      <a-col :span="5">
        <a-input-number
          :min="1"
          :max="50"
          id="buttonPadding"
          v-model="options.buttonRadius"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="6">
        <label for="titleSpacing">Title Spacing</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="1" :max="300" v-model="options.titleSpacing" />
      </a-col>
      <a-col :span="5">
        <a-input-number
          :min="1"
          :max="300"
          id="titleSpacing"
          v-model="options.titleSpacing"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="6">
        <label for="gradientCoverage">Gradient Coverage</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="50" :max="100" v-model="options.gradientCoverage" />
      </a-col>
      <a-col :span="5">
        <a-input-number
          :min="50"
          :max="100"
          id="gradientCoverage"
          v-model="options.gradientCoverage"
        />
      </a-col>
    </a-row>

    <a-row>
      <a-col :span="6">
        <label for="gradientType">Upload a new image</label>
      </a-col>
      <a-col :span="18">
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
      options: {
        buttonRadius: 5,
        titleSpacing: 40,
        gradientCoverage: 65,
        gradientOverlay: "circular",
        image: "/qijin-xu.png",
      },
    }
  },
  methods: {
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
  watch: {
    options: {
      deep: true,
      handler(newValue) {
        this.$store.commit("updateLeftOptions", newValue)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-input-number {
  margin-left: 12px;
}
</style>
