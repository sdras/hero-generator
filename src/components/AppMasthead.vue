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
      :style="
        `borderRadius: ${leftoptions.buttonRadius}px; background: ${rightoptions.buttonColor}`
      "
      v-if="rightoptions.button"
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
  background-size: cover;
}

h1 {
  font-family: "Tungsten A", "Tungsten B";
  font-style: normal;
  font-weight: 500;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 3px #000;
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
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
}

button:hover,
button:focus {
  background: #089aad;
}

button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}

button:active {
  transform: scale(0.99);
}
</style>
