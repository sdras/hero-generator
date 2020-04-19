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
        <a-slider :min="0" :max="100" v-model="options.gradientCoverage" />
      </a-col>
      <a-col :span="5">
        <a-input-number
          :min="0"
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
          name="file"
          :multiple="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
          <a-button> <a-icon type="upload" /> Click to Upload </a-button>
        </a-upload>
      </a-col>
    </a-row>
  </section>
</template>

<script>
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export default {
  data() {
    return {
      options: {
        buttonRadius: 5,
        titleSpacing: 40,
        gradientCoverage: 37,
        gradientOverlay: "circular",
        previewImage: "/qijin-xu.png",
        previewVisible: false,
      },
      headers: {
        authorization: "authorization-text",
      },
    }
  },
  methods: {
    async handleChange(info) {
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`)
        console.log(info.file.originFileObj)
        let info = await getBase64(info.file.originFileObj)
        console.log(info)
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
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
