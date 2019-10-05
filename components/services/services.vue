<template>
  <b-col class="mt-2">
    <h3 class="text-center my-service-text">MY SERVICES</h3>
    <div class="text-line"></div>
    <b-row class="text-center">
      <b-col class="mb-2">
        <fa :icon="['fas', 'laptop']" :mask="['fas', 'circle']"  class="icon-color fa-5x fa-stack"/>
        <h2 class="title">Software Development Consultant</h2>
        <p
          class="summary"
        >I offer sofware development consultancy services.</p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'code']" :mask="['fas', 'circle']" :class="text-primary" class="icon-color fa-5x fa-stack" />
        <h2 class="title">Web Development</h2>
        <p class="summary">
          I will build you a stunning, user-friendly,
          robost and super responsive website to
          automate your business.
        </p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'phone']" :mask="['fas', 'circle']" class="icon-color fa-5x fa-stack" />
        <h2 class="title">Mobile Development</h2>
        <p class="summary">
          I will build you a  user-friendly,
          robost and super fast Mobile Application to
          automate your business.
        </p>
      </b-col>
      <b-col class="mb-2">
        <fa :icon="['fas', 'home']" :mask="['fas', 'circle']" class="icon-color fa-5x fa-stack" />
        <h2 class="title">Content/Digital Marketing</h2>
        <p
          class="summary"
        >I will create audience engaging and thriving contents and also use my digital marketing skills to drive traffic to your business.</p>
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

.icon-color{
  /* background:#18b898; */
  color:#18b898;
}
</style>