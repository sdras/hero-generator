<template>
  <section
    class="masthead"
    role="img"
    aria-label="Large Hero Image Description"
    :style="{
      background: backgroundCSS,
    }"
  >
    <h1 :style="`marginBottom: ${leftoptions.titleSpacing}px`">
      The Hero Generator
    </h1>
    <button
      ref="button"
      :style="
        `borderRadius: ${leftoptions.buttonRadius}px;
         background: ${rightoptions.buttonColor};
         transition: background ease .25s;
        `"
      v-if="rightoptions.button"
      @mouseover="buttonMouseOver"
      @mouseout="buttonMouseOut"
    >
      When a hero comes along
    </button>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["leftoptions", "rightoptions"]),
    backgroundCSS() {
      return this.$store.getters.backgroundCSS
    },
  },
  methods: {
    buttonMouseOver () {
      this.$refs.button.style.background = this.rightoptions.buttonHoverColor
    },
    buttonMouseOut () {
      this.$refs.button.style.background = this.rightoptions.buttonColor
    }
  }
}
</script>

<style lang="scss" scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-size: cover !important;
}

h1 {
  font-family: "Tungsten A", "Tungsten B";
  font-style: normal;
  font-weight: 500;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
}

button {
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}
</style>
