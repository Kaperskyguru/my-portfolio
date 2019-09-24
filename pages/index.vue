<template>
  <div class="wrapper">
    <TheNavBar />

    <Intro />
    <b-container>
      <Services />

      <Projects />

      <Blog />
    </b-container>

    <contact />

    <Footer />
  </div>
</template>

<script>
import TheNavBar from "~/components/header/theNavBar.vue";
import Intro from "~/components/slider/intro.vue";
import Services from "~/components/services/services.vue";
import Projects from "~/components/projects/projects.vue";
import Blog from "~/components/blog/blog.vue";
import Contact from "~/components/contact/contact.vue";
import Footer from "~/components/footer/footer.vue";
export default {
  components: {
    TheNavBar,
    Intro,
    Services,
    Projects,
    Blog,
    Contact,
    Footer
  }
};
</script>
<style scoped>
.wrapper {
  max-width: 100%;
}
</style>