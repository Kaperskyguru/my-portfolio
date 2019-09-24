<template>
  <b-navbar toggleable="lg" type="dark" class="my-navbar navbar-reduce navbar-b fixed-top">
    <div class="container">
      <b-navbar-brand to="index">
        <img src="~/assets/images/logoglite (1).png" alt="Logo" srcset />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item :to="{name:'index'}" v-bind:active="true" class="my-nav-item">HOME</b-nav-item>
          <b-nav-item :to="{name:'about'}" class="my-nav-item">ABOUT</b-nav-item>
          <b-nav-item :to="{name:'projects'}" class="my-nav-item">PROJECTS</b-nav-item>
          <b-nav-item :to="{name:'blog'}" class="my-nav-item">BLOG</b-nav-item>
          <b-nav-item :to="{name:'contact'}" class="my-nav-item">CONTACT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
<script>
import $ from "jquery";
export default {
  mounted() {
    $(window).scroll(function() {
      $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
    });
  }
};
</script>
<style scoped>
/* .my-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1030;
} */

.navbar-dark {
  transition: 500ms ease;
  background: transparent;
  color: #000 !important;
}
.navbar-dark.scrolled {
  transition: all 0.5s ease-in-out;
  background: #fff;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.06);
}

.navbar-dark.scrolled .my-nav-item a {
  color: #000 !important;
}

.ml-auto .my-nav-item a {
  font-family: Roboto;
  font-style: normal;
  text-transform: uppercase;
  color: #ffffff;
}

.ml-auto .my-nav-item {
  position: relative;
  padding-right: 10px;
  padding-left: 0;
}

.container img {
  max-width: 40px;
  max-height: 40px;
}
</style>