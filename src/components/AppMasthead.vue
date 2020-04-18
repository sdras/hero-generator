<template>
  <section
    class="masthead"
    role="img"
    aria-label="Large Hero Image Description"
  >
    <h1>The Hero Generator</h1>
    <button v-if="options.button">When a hero comes along</button>
  </section>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["options"]),
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
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url("https://hero-generator.netlify.app/qijin-xu.png") no-repeat center
      center scroll; /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
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
  margin-bottom: 40px;
  text-shadow: 1px 2px 3px #000;
}

button {
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  background: #098191;
  color: #ffffff;
  border-radius: 5px;
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
