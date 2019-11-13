<template>
  <div>
    <br />
    <br />
    <h3 class="text-center my-service-text">PROJECTS</h3>
    <div class="text-line"></div>

    <b-row class="mt-3">
      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="https://haypko.herokuapp.com/">
              <img src="~/assets/images/haykpo.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center">
            <h4><a target="_blank" href="https://haypko.herokuapp.com/">Haypko</a></h4>
            <small class="text-muted">Tech Stack: <em>MySQL,  Vanilla PHP, JS, HTML, CSS </em> </small>
            <p>
              This is an fuel retailing website developed
              with Vanilla PHP.
            </p>
            <span class="github">
              <a target="_blank" href="https://github.com/Kaperskyguru/Haypko">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="https://iplayfootball.org">
              <img src="~/assets/images/iplayfootball.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center">
            <h4>
              <a target="_blank" href="https://iplayfootball.org">Iplayfootball</a>
            </h4>
            <small class="text-muted">Tech Stack: <em>MySQL, Laravel,  PHP, Blade Templating </em> </small>
            <p>This is a players’ management website developed with Laravel.</p>
            <span class="github">
              <a target="_blank" href="https://github.com/Kaperskyguru/iplayfootball">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="http://rischoola.com.ng">
              <img src="~/assets/images/rischoola.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center">
            <h4>
              <a target="_blank" href="http://rischoola.com.ng">Rischoola</a>
            </h4>
            <small class="text-muted">Tech Stack: <em>MySQL, Vanilla PHP,  HTML, JS, CSS</em> </small>
            <p>
              This is a students and schoolers website developed
              with vanilla PHP.
            </p>
            <span class="github">
              <a target="_blank" href="https://github.com/Kaperskyguru/rischoola.com.ng">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="#">
              <img src="~/assets/images/haykpo_dashboard.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center">
            <h4><a target="_blank" href="#">Haypko Dashboard</a></h4>
            <small class="text-muted">Tech Stack: <em>MySQL, Vanilla PHP,  HTML, JS, CSS</em> </small>
            <p>
              This is the dashboard of the fuel retailing website developed
              with Vanilla PHP.
            </p>
            <span class="github">
              <a target="_blank" href="https://github.com/Kaperskyguru/Haypko">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="https://iplayfootball.org/docsmanaga/">
              <img src="~/assets/images/dboard.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center">
            <h4><a target="_blank" href="https://iplayfootball.org/docsmanaga/">DocsManaga</a></h4>
            <small class="text-muted">Tech Stack: <em>MySQL, PHP, Laravel, Blade Templating Engine</em> </small>
            <p>
              This is an document management website developed
              with Laravel.
            </p>
            <span class="github" style="text-align:left">
              <a target="_blank" href="https://github.com/Kaperskyguru/DocsManaga">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>

      <b-col md="4">
        <div class="shadow mb-4">
          <div class="image-container">
            <a target="_blank" href="#">
              <img src="~/assets/images/electro.png" alt srcset />
            </a>
          </div>
          <div class="project-title mt-3 text-center p-2">
            <h4>Electro e-commerce website</h4>
            <small class="text-muted">Tech Stack: <em>MySQL, Expressjs, Vuejs, NodeJS</em> </small>
            <p>
              This is an electronic e-commerce website developed
              with MEVN stack.
            </p>
            <span class="github">
              <a target="_blank" href="https://github.com/Kaperskyguru/ecommerce_mevn_front">
                <fa :icon="['fab', 'github']" class="fa-2x fa-stack" />
              </a>
            </span>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.project-title h4 {
  color: #18b898;
}

.text-line {
  width: 70px;
  height: 5px;
  background-color: #18b898;
  margin: 0 auto;
}

a{
  color:#18b898;
}
</style>