export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Solomon Eseme (kaperskyguru) Software Engineer, Backend Engineer, DevOps Engineer',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'I\'m Solomon Eseme, a proficient software engineer specializing in back-end development, I have more than 4 years professional experience in software development, freelancing and instructing, with my level of experience and expertise, I\'ll love to join your team to learn more and contribute my quota to the growth and development of your organization.'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'css/all.css',
      type: 'text/css'
    }],
    script: [{
      src: 'https://use.fontawesome.com/83c28632f3.js'
    }, {
      src: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11'
    }, {
      src: 'js/main.js'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    // '~/css/all.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    'bootstrap-vue/nuxt',

    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }, {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }]
    }],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

}
