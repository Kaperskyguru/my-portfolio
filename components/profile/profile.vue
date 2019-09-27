<template>
  <b-card class="mt-4 mb-4 profile">
    <b-card-body>
      <b-row>
        <b-col>
          <div class="text-center">
            <img src="~/assets/images/profile.jpg" class="profile-img" alt="Me" />
            <h5 class="name">Solomon Eseme</h5>
            <p class="job">Software engineer, web developer, devops engineer</p>
            <div class="cover">
              <p class="summary">
                I'm Solomon Eseme, a proficient software engineer specializing in back-end development, I have more than 4
                years professional experience in software development, freelancing and instructing, with my level of
                experience and expertise, I'll love to join your team to learn more and contribute my quota to the growth and
                development of your organization.
              </p>
            </div>
            <div class="text-center">
              <b-button href="/pdf/MyNewCV.pdf" size="lg" class="m-1 btn-rd btn-resume">
                <fa :icon="['fas', 'briefcase']" />
                <span>My Resume</span>
              </b-button>
              <b-button href="#" size="lg" class="m-1 btn-rd btn-contact">
                <fa :icon="['fas', 'envelope']" />
                <span>Contact me</span>
              </b-button>
            </div>
          </div>
        </b-col>

        <b-col>
          <div class="skillset m-5">
            <small class="skill">Java</small>
            <small class="percent">70%</small>
            <b-progress :max="100">
              <b-progress-bar :value="70" variant="success"></b-progress-bar>
            </b-progress>
          </div>
          <div class="skillset m-5">
            <small class="skill">PHP</small>
            <small class="percent">90%</small>
            <b-progress :max="100">
              <b-progress-bar :value="90" variant="success"></b-progress-bar>
            </b-progress>
          </div>
          <div class="skillset m-5">
            <small class="skill">JavaScript</small>
            <small class="percent">80%</small>
            <b-progress :max="100">
              <b-progress-bar :value="80" variant="success"></b-progress-bar>
            </b-progress>
          </div>
          <div class="skillset m-5">
            <small class="skill">Mobile</small>
            <small class="percent">40%</small>
            <b-progress :max="100">
              <b-progress-bar :value="40" variant="success"></b-progress-bar>
            </b-progress>
          </div>
          <div class="skillset m-5">
            <small class="skill">DevOps</small>
            <small class="percent">50%</small>
            <b-progress :max="100">
              <b-progress-bar :value="50" variant="success"></b-progress-bar>
            </b-progress>
          </div>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<style scoped>
.profile-img-cover {
  box-shadow: 4;
}
.profile-img {
  width: 30%;
  border-radius: 100% !important;
}
.profile {
  background: #ffffff;
  border: 1px solid #f7f7f7;
  max-width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.name {
  text-transform: uppercase;
  text-align: center;
  font-weight: 700 !important;
  color: #18b898 !important;
}
.summary {
  text-align: justify;
}
.job {
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  text-transform: capitalize;
}

.btn-resume {
  border-color: #18b898;
  color: #18b898;
  font-weight: 700 !important;
}

.btn-contact {
  border-color: #000;
  color: #000;
  font-weight: 700 !important;
}

.btn-rd {
  background-color: transparent;
  text-transform: uppercase !important;
  font-size: 0.9rem !important;
  line-height: 1.6 !important;
  vertical-align: middle !important;
  border-radius: 50px !important;
  padding: 12px 32px !important;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out !important;
}

.skill {
  font-weight: 700 !important;
  text-align: left !important;
}
.percent {
  color: #000;
  font-weight: 700 !important;
  float: right !important ;
}
.progress {
  display: flex;
  overflow: hidden;
  font-size: 0.675rem;
  background: #e9ecef;
  border-radius: 0.25rem;
  margin: 0.5rem 0 1.2rem 0;
  height: 0.5rem !important;
}

.progress .progress-bar {
  background: #18b898 !important;
  height: 0.5rem !important;
}
</style>