import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

function rgbify(color) {
  let r = 0,
    g = 0,
    b = 0
  let h = color

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
}

function gradientType(overlay) {
  let direction
  switch (overlay) {
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

  if (overlay === "circular") {
    return `radial-gradient(ellipse at center`
  } else {
    return `linear-gradient(${direction}`
  }
}

export default new Vuex.Store({
  state: {
    leftoptions: {
      buttonRadius: 5,
      titleSpacing: 40,
      gradientCoverage: 37,
      gradientOverlay: "circular",
      previewImage: "https://hero-generator.netlify.app/qijin-xu.png",
      fileName: "qijin-xu.png",
      previewVisible: false,
    },
    rightoptions: {
      buttonColor: "#098191",
      gradientColor: "rgb(0, 0, 0)",
      buttonHoverColor: "#63b6b8",
      button: true,
    },
  },
  getters: {
    gradient: (state) => {
      const type = gradientType(state.leftoptions.gradientOverlay),
        rgb = rgbify(state.rightoptions.gradientColor),
        { gradientOverlay, gradientCoverage } = state.leftoptions

      return gradientOverlay !== "none"
        ? `${type}, rgba(0,0,0,0) 0%, rgba(0,0,0,0) ${gradientCoverage}%, rgba(${rgb},0.65) 100%), `
        : ""
    },
    backgroundCSS: (state, getters) => {
      let img

      state.leftoptions.previewVisible
        ? (img = state.leftoptions.previewImage)
        : (img = "https://hero-generator.netlify.app/qijin-xu.png")

      return `${getters.gradient}url(${img}) no-repeat center center scroll`
    },
    outputCSS: (state, getters) => {
      return `${getters.gradient}url(${state.leftoptions.fileName}) no-repeat center center scroll`
    },
  },
  mutations: {
    updateLeftOptions(state, newOptions) {
      state.leftoptions = newOptions
    },
    updateRightOptions(state, newOptions) {
      state.rightoptions = newOptions
    },
  },
  actions: {
    async resizeImages({ state }) {
      try {
        await fetch(
          "https://heroimage-gen.azurewebsites.net/api/heroimage?code=Eke0cvjYgjHUCTetIaGtpRBkW55o4njQpv/R4ASVSUsmDFWlWb3AeA==",
          {
            method: "post",
            body: JSON.stringify({ image: state.leftoptions.previewImage }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        ).then((res) => {
          console.log(JSON.stringify(res, null, 2))
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
})
