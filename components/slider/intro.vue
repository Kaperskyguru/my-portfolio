<template>
  <main>
    <div id="intro-img">
      <div class="overlay-intro"></div>
      <div class="intro">
        <h3 class="greeting">Hello, i’m solomon eseme</h3>
        <p class="title" id="title"></p>
      </div>
    </div>
  </main>
</template>
<style scoped>
.intro {
  text-align: center;
  left: 15%;
  right: 15%;
  top: 40%;
  position: absolute;
}
#intro-img {
  widows: 100%;
  height: 90vh;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background: url("~assets/images/main.jpg") center center;
}
.greeting {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-transform: capitalize;
  color: #ffffff;
}
.title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: #18b898;
}
#intro-img .overlay-intro {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0.9;
}
</style>
<script>
import Typed from "typed.js";

export default {
  data() {
    return {
      title: ["Software engineer", "Backend engineer", "DevOps engineer"]
    };
  },
  mounted() {
    this.typingAnimation();
  },

  methods: {
    typingAnimation() {

      const words = this.title;
      let i = 0;
      let timer;

      function typingEffect() {
        let word = words[i].split("");

        var loopTyping = function() {
          if (word.length > 0) {
            document.getElementById("title").innerHTML += word.shift();
          } else {
            deletingEffect();
            return false;
          }
          timer = setTimeout(loopTyping, 500);
        };
        loopTyping();
      }

      function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
          if (word.length > 0) {
            word.pop();
            document.getElementById("title").innerHTML = word.join("");
          } else {
            if (words.length > i + 1) {
              i++;
            } else {
              i = 0;
            }
            typingEffect();
            return false;
          }
          timer = setTimeout(loopDeleting, 200);
        };
        loopDeleting();
      }

      typingEffect();
    }
  }
};
</script>