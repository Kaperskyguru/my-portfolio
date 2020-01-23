<template>
  <footer>
    <b-row>
      <b-col md="4">
        <h5>ABOUT ME</h5>
        <b-row>
          <b-col cols="3">
            <br />
            <img
              src="~/assets/images/avatar2.jpg"
              class="profile-img"
              alt="Me"
              srcset
            />
          </b-col>
          <b-col cols="9">
            <p>
              I’m Solomon Eseme. I’m a Software developer from Nigeria. I am a
              fan of programming, technology, and web development. I’m also
              interested in education and entrepreneurship.
            </p>

            <a href="http://facebook.com/solomon.eseme" class="social">
              <fa :icon="['fab', 'facebook']" class="ml-1 mr-2"></fa>
            </a>
            <a href="http://twitter.com/kaperskyguru" class="social">
              <fa :icon="['fab', 'twitter']" class="ml-1 mr-2"></fa>
            </a>
            <a href="http://github.com/kaperskyguru" class="social">
              <fa :icon="['fab', 'github']" class="ml-1 mr-2"></fa>
            </a>
            <a href="http://instagram.com/kaperskyguru" class="social">
              <fa :icon="['fab', 'instagram']" class="ml-1 mr-2"></fa>
            </a>
            <a href="mailto:solomoneseme@gmail.com" class="social">
              <fa :icon="['fas', 'envelope']" class="ml-1 mr-2"></fa>
            </a>
            <a href="http://wa.me/+2348145655380" class="social">
              <fa :icon="['fab', 'whatsapp']" class="ml-1 mr-2"></fa>
            </a>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="4">
        <h5>TOOLS I HAVE USED</h5>
        <p class="skill">
          <strong>Web Engineering:</strong>
          <span
            >PHP, Laravel, JavaScript, NodeJs, Express, CSS, HTML, Vuejs,
            etc</span
          >
        </p>

        <p class="skill">
          <strong>Mobile Engineering:</strong>
          <span>Android Java, etc</span>
        </p>

        <p class="skill">
          <strong>DevOps Engineering:</strong>
          <span>Linux, Docker, jira, heroku, aws, etc</span>
        </p>

        <p class="skill">
          <strong>Others Skillset:</strong>
          <span
            >Blogging, Youtube Creator, Drummer, Microsoft office Suite, SEO
            etc</span
          >
        </p>
      </b-col>
      <b-col md="4">
        <h5>NAVIGATION</h5>
        <ul>
          <li>About me</li>
          <li>My Projects</li>
          <li>My Blog</li>
          <li>Contact me</li>
        </ul>
      </b-col>
    </b-row>
    <div class="copyright text-center" style="margin-top:30px">
      <p>&copy; Copyright Solomoneseme All right Reserved</p>
      <span>
        Designed with
        <fa
          :icon="['fas', 'heart']"
          class="ml-1 mr-2"
          style="color:#18b898"
        ></fa
        >by Solomon Eseme
      </span>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: #000000;
  margin-top: 10px;
  padding: 30px;
  color: #ddd;
}
.profile-img {
  width: 100%;
  border-radius: 50% !important;
}

h5 {
  color: #18b898;
}

.skill {
  font-size: 0.8rem;
}

ul {
  list-style: none;
}
ul li {
  padding-top: 1em;
  font-weight: 700;
}

.social {
  margin-top: 5px;
  color: #fff;
}
</style>