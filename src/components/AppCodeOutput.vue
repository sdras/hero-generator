<template>
  <div></div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState([
      "rightoptions.button",
      "rightoptions.buttonColor",
      "leftoptions.buttonRadius",
      "leftoptions.titleSpacing",
    ]),
    backgroundCSS() {
      return this.$store.getters.backgroundCSS
    },
    mastheadOutput() {
      return `.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  background-size: cover;
  background: ${this.backgroundCSS};
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: ${this.leftoptions.titleSpacing}
}`
    },
    buttonOutput() {
      return `button {
  background: ${this.rightoptions.buttonColor};
  border-radius: ${this.leftoptions.buttonRadius};
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
}`
    },
    buttonHtmlOutput() {
      if (!this.rightoptions.button) return
      return `
    <button>
      When a hero comes along
    </button>`
    },
    htmlOutput() {
      return `<section
    class="masthead"
    role="img"
    aria-label="Large Hero Image Description"
  >
    <h1>
      The Hero Generator
    </h1>${this.buttonHtmlOutput}
  </section>`
    },
  },
}
</script>

<style lang="scss" scoped></style>
