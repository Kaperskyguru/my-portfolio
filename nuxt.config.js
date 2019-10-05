export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
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
  css: [],
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
