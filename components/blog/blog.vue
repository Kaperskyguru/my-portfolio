<template>
  <div>
    <br />
    <br />
    <h5 class="text-center my-service-text">BLOG</h5>
    <div class="text-line"></div>

    <article class="mt-3">
      <b-row class="blog">
        <b-col md="4">
          <div class="shadow mb-4">
            <a
              href="https://medium.com/backenders-club/multiple-role-based-authentication-in-laravel-e79966205470?source=---------9------------------"
            >
              <div class="blog-img-cover">
                <img src="~/assets/images/laravel.png" alt class="img-fluid" />
              </div>

              <h5 class="title">
                Multiple role-based authentication in Laravel
              </h5>
            </a>
            <p class="summary">
              I will show you how to implement multiple role-based
              authentication in Laravel even if you have many different users
              and multiple…
            </p>
          </div>
        </b-col>
        <b-col md="4">
          <div class="shadow mb-4">
            <a
              href="https://medium.com/@Kaperskyguru/getting-started-with-software-engineering-8a18fb0b27d3"
            >
              <div class="blog-img-cover">
                <img src="~/assets/images/software.png" alt class="img-fluid" />
              </div>
              <h5 class="title">Getting started with software engineering</h5>
            </a>
            <p class="summary">
              Every career in life has different patterns, structures,
              architectures and principles, Software engineering or
              development...
            </p>
          </div>
        </b-col>

        <b-col md="4">
          <div class="shadow mb-4">
            <a
              target="blank"
              href="https://medium.com/js-dojo/build-a-real-time-chat-app-with-vuejs-socket-io-and-nodejs-714c8eefa54e"
            >
              <div class="blog-img-cover">
                <img src="~/assets/images/vuejs.png" alt class="img-fluid" />
              </div>
              <h5 class="title">
                Real time chat app with Vuejs, Nodejs and Socket.io
              </h5>
            </a>
            <p class="summary">
              In this article, I will be showing you how I build a real time
              chat app with VUEJS, NODEJS and EXPRESS and SOCKET.IO.
            </p>
          </div>
        </b-col>
        <!-- 
        <b-col md="4">
          <div class="shadow mb-4">
            <div class="blog-img-cover">
              <img src="~/assets/images/vuejs.png" alt class="img-fluid" />
            </div>
            <h5 class="title">This is my first post title</h5>
            <p
              class="summary"
            >In this article, I will be showing you how I build a real time chat app with VUEJS, NODEJS and EXPRESS and SOCKET.IO.</p>
          </div>
        </b-col>

        <b-col md="4">
          <div class="shadow mb-4">
            <div class="blog-img-cover">
              <img src="~/assets/images/vuejs.png" alt class="img-fluid" />
            </div>
            <h5 class="title">This is my first post title</h5>
            <p
              class="summary"
            >In this article, I will be showing you how I build a real time chat app with VUEJS, NODEJS and EXPRESS and SOCKET.IO.</p>
          </div>
        </b-col>

        <b-col md="4">
          <div class="shadow mb-4">
            <div class="blog-img-cover">
              <img src="~/assets/images/vuejs.png" alt class="img-fluid" />
            </div>
            <h5 class="title">This is my first post title</h5>
            <p
              class="summary"
            >In this article, I will be showing you how I build a real time chat app with VUEJS, NODEJS and EXPRESS and SOCKET.IO.</p>
          </div>
        </b-col>-->
      </b-row>
    </article>
    <b-button
      href="https://medium.com/@Kaperskyguru"
      class="btn-see-all text-center"
      variant="outline-success"
      >See All</b-button
    >
  </div>
</template>
<style scoped>
.text-line {
  width: 70px;
  height: 5px;
  background-color: #18b898;
  margin: 0 auto;
}

.title {
  color: #18b898;
  padding: 10px 10px 0px;
  margin-top: 2px;
  font-weight: 700 !important;
}

a {
  text-decoration: none;
}

.summary {
  border-left: 1px solid #f7f7f7;
  padding: 10px 10px 10px;
  text-align: justify;
}

hr {
  margin: 0px !important;
}

.date {
  padding: 0px 10px 5px 10px;
  font-style: italic;
  font-size: 11px;
}

.btn-see-all {
  border-color: #18b898;
  color: #18b898;
  font-weight: 700 !important;
  background-color: transparent;
  text-align: center !important;
}
</style>