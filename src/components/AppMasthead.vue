<template>
  <section
    class="masthead"
    role="img"
    aria-label="Large Hero Image Description"
    :style="{
      background: backgroundCSS2,
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
    rgbify() {
      let r = 0,
        g = 0,
        b = 0
      let h = this.rightoptions.gradientColor

      // 3 digits
      if (h.length === 4) {
        r = "0x" + h[1] + h[1]
        g = "0x" + h[2] + h[2]
        b = "0x" + h[3] + h[3]

        // 6 digits
      } else if (h.length === 7) {
        r = "0x" + h[1] + h[2]
        g = "0x" + h[3] + h[4]
        b = "0x" + h[5] + h[6]
      }

      return `${+r},${+g},${+b}`
    },
    gradientType() {
      let direction
      switch (this.leftoptions.gradientOverlay) {
        case "up":
          direction = "to bottom"
          break
        case "down":
          direction = "to top"
          break
        case "diagonaldown":
          direction = "-45deg"
          break
        case "diagonalup":
          direction = "45deg"
          break
      }

      if (this.leftoptions.gradientOverlay === "circular") {
        return `radial-gradient(ellipse at center`
      } else {
        return `linear-gradient(${direction}`
      }
    },
    backgroundCSS2() {
      let overlay2 = `${this.gradientType}, rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${this.leftoptions.gradientCoverage}%, rgba(${this.rgbify},0.65) 100%)`
      //let overlay = ("linear-gradient(to bottom, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0) 100%)")
      let img = "https://hero-generator.netlify.app/qijin-xu.png"
      return `${overlay2}, url(${img}) no-repeat center center scroll`
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
