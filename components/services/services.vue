<template>
  <b-col class="mt-2">
    <h3 class="text-center my-service-text">MY SERVICES</h3>
    <div class="text-line"></div>
    <b-row class="text-center">
      <b-col class="mb-2">
        <!-- <span class="icon-stack text-primary fa-3x"> -->
        <!-- <i class="fas fa-circle fa-stack-2x"></i>
          <i class="fas fa-image fa-stack-1x fa-inverse"></i>
        </span>-->
        <fa :icon="['fas', 'laptop']" :mask="['fas', 'circle']" class="fa-5x fa-stack" />
        <h2 class="title">Software Engineer</h2>
        <p class="summary">
          I will build you a stunning, user-friendly,
          robost and super responsive website to
          automate your business
        </p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'image']" :mask="['fas', 'circle']" class="fa-5x fa-stack" />
        <h2 class="title">Web Engineer</h2>
        <p class="summary">
          I will build you a stunning, user-friendly,
          robost and super responsive website to
          automate your business
        </p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'phone']" :mask="['fas', 'circle']" class="fa-5x fa-stack" />
        <h2 class="title">Mobile Engineer</h2>
        <p class="summary">
          I will build you a stunning, user-friendly,
          robost and super responsive website to
          automate your business
        </p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'image']" :mask="['fas', 'circle']" class="fa-5x fa-stack" />
        <h2 class="title">DevOps Engineer</h2>
        <p class="summary">
          I will build you a stunning, user-friendly,
          robost and super responsive website to
          automate your business
        </p>
      </b-col>
    </b-row>
    <br />
    <br />
    <h3 class="text-center my-service-text">ABOUT ME</h3>
    <div class="text-line"></div>
    <profiles />
  </b-col>
</template>
<script>
import Profiles from "~/components/profile/profile";
export default {
  components: { Profiles }
};
</script>
<style scoped>
.main {
  margin-top: 0.5rem;
}

.icon {
  background: #18b898;
}
.title {
  font-family: Roboto;
  font-size: 1.125rem;
  font-weight: 700 !important;
  text-transform: uppercase;

  color: #18b898 !important;
}

.my-service-text {
  text-align: center !important;
  font-weight: 700 !important;
}

.text-line {
  width: 70px;
  height: 5px;
  background-color: #18b898;
  margin: 0 auto;
}

.icon {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  vertical-align: middle;
  width: 2.5em;
}
</style>