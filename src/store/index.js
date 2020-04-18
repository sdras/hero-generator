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
      image: "",
    },
  },
  mutations: {},
  actions: {},
})
