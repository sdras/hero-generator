import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    options: {
      buttonPadding: 5,
      titleSpacing: 40,
      gradientOverlay: "circular",
      button: true,
      image: "/qijin-xu.png",
    },
  },
  getters: {
    // gradientCSS: (state) => {},
    bkCSSOutput: (state) => {
      return `display: flex;
  justifyContent: center;
  alignItems: center;
  flexDirection: column;
  textAlign: center;
  width: 100%;
  height: 60vh;
  overflow: hidden;
  backgroundSize: cover;
  background: url("https://hero-generator.netlify.app/${state.options.image}");`
    },
  },
  mutations: {},
  actions: {},
})
