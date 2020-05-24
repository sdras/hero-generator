<template>
  <div>
    <div ref="code">
      <h3>CSS</h3>
      <pre class="code">
        {{ mastheadOutput }}
      </pre>
      <pre class="code" v-if="rightoptions.button">
        {{ buttonOutput }}
      </pre>

      <h3>HTML</h3>
      <pre class="code html">
        {{ htmlOutput }}
      </pre>
    </div>

    <div class="copybutton">
      <a-button
        type="primary"
        role="region"
        id="codeCopyStatus"
        aria-live="polite"
        class="copycode"
        @click.stop.prevent="copy"
      >
        <span v-if="codeWasCopied">Code was copied!</span>
        <span v-else>Copy to the clipboard!</span>
      </a-button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      codeWasCopied: false,
      showHtml: false
    };
  },
  computed: {
    ...mapState(["rightoptions", "leftoptions"]),
    outputCSS() {
      return this.$store.getters.outputCSS;
    },
    mastheadOutput() {
      return `

.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: ${this.outputCSS};
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: ${this.leftoptions.titleSpacing}px;
}`;
    },
    buttonOutput() {
      return `
button {
  background: ${this.rightoptions.buttonColor};
  transition: background ease .25s;
  border-radius: ${this.leftoptions.buttonRadius}px;
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
button:hover {
  background: ${this.rightoptions.buttonHoverColor}
}
button:focus {
  outline: 1px solid #fff;
  outline-offset: -4px;
}`;
    },
    buttonHtmlOutput() {
      if (!this.rightoptions.button) return '';
      return `
    <button>
      When a hero comes along
    </button>`;
    },
    htmlOutput() {
      return `
<section class="masthead" role="img" aria-label="Image Description">
  <h1>
    The Hero Generator
  </h1>${this.buttonHtmlOutput}
</section>`;
    }
  },
  methods: {
    copy() {
      let text = this.$refs.code,
        range,
        selection;
      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }

      let copied = document.execCommand("copy");

      this.$store.dispatch("resizeImages");

      if (copied) {
        this.codeWasCopied = true;
        setTimeout(() => {
          this.codeWasCopied = false;
        }, 2000);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  color: #eee;
}

pre {
  font-size: 13px;
  padding: 0 15px;
  margin-top: -35px;
  border-radius: 8px;
}

pre.html {
  margin-top: -15px;
}

.copybutton {
  width: 100%;
  height: 200px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.copybutton button {
  display: block;
  margin-top: 70px;
  font-family: "Whitney A", "Whitney B";
  font-style: normal;
  font-weight: 400;
  height: 35px;
}
</style>
