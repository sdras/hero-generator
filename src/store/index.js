import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftoptions: {
      buttonRadius: 5,
      titleSpacing: 40,
      gradientCoverage: 37,
      gradientOverlay: "circular",
      previewImage: "/qijin-xu.png",
      previewVisible: false,
    },
    rightoptions: {
      buttonColor: "#098191",
      gradientColor: "rgb(0, 0, 0)",
      button: true,
    },
  },
  getters: {
    // gradientCSS: (state) => {},
  },
  mutations: {
    updateLeftOptions(state, newOptions) {
      state.leftoptions = newOptions
    },
    updateRightOptions(state, newOptions) {
      state.rightoptions = newOptions
    },
  },
  actions: {},
})
