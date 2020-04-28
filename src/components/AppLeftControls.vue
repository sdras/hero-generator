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
        <label for="gradientCoverage">Gradient Reduction</label>
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
        <label for="buttonRadius">Button Radius</label>
      </a-col>
      <a-col :span="13">
        <a-slider :min="1" :max="50" v-model="options.buttonRadius" />
      </a-col>
      <a-col :span="5">
        <a-input-number :min="1" :max="50" id="buttonPadding" v-model="options.buttonRadius" />
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
        <a-input-number :min="1" :max="300" id="titleSpacing" v-model="options.titleSpacing" />
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
          :beforeUpload="beforeUpload"
        >
          <a-button>
            <a-icon type="upload" />Click to Upload
          </a-button>
        </a-upload>
      </a-col>
    </a-row>
  </section>
</template>

<script>
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default {
  data() {
    return {
      options: {
        buttonRadius: 5,
        titleSpacing: 40,
        gradientCoverage: 37,
        gradientOverlay: "circular",
        previewImage: "https://hero-generator.netlify.app/qijin-xu.png",
        fileName: "qijin-xu.png",
        previewVisible: false
      },
      headers: {
        authorization: "authorization-text"
      },
      loading: false
    };
  },
  methods: {
    handleChange(info) {
      if (info.file.status === "uploading") this.loading = true;

      if (info.file.status === "done") {
        this.options.fileName = info.file.name;

        getBase64(info.file.originFileObj, imageUrl => {
          this.options.previewImage = imageUrl;
          this.loading = false;
          this.options.previewVisible = true;
          if (info.fileList.length > 1) info.fileList.shift();
        });
      }

      if (info.file.status === "removed") {
        this.options.previewVisible = false;
        this.options.fileName = "qijin-xu.png";
      }
    },
    beforeUpload(file) {
      const isCorrectFiletype =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/svg+xml" ||
        file.type === "image/webp" ||
        file.type === "image/gif";

      if (!isCorrectFiletype)
        this.$message.error("Supported filetypes are jpg/png/svg/webp/gif!");

      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isCorrectFiletype && isLt2M;
    }
  },
  watch: {
    options: {
      deep: true,
      handler(newValue) {
        this.$store.commit("updateLeftOptions", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.ant-input-number {
  margin-left: 12px;
  width: calc(100% - 8px);
}
</style>
