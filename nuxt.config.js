export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ecommerce-template',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: [
  //   '~assets/css/main.css'
  // ],
  css: [
    '~assets/scss/main.css',
    '~assets/css/k13-cookies.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/base.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // styleResources: {
  //   scss: [
  //     '~assets/scss/mixins.scss',
  //     '~assets/scss/variables.scss',
  //     '~assets/scss/fonts.scss',
  //     '~assets/scss/medias.scss',
  //     '~assets/scss/reset.scss'
  //   ]
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    ['nuxt-fontawesome', {
      component: 'fa',
    }],
    ['nuxt-lazy-load', {
      // These are the default values
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '/default.jpeg',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad',

      observerConfig: {
        // See IntersectionObserver documentation
      }
    }],

  ],

  fontawesome: {
    imports: [
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['faLightbulb']
      // },
      // {
      //   set: '@fortawesome/free-brands-svg-icons',
      //   icons: ['faGithub']
      // },
      // {
      //   set: '@fortawesome/free-regular-svg-icons',
      //   icons: ['faLightbulb']
      // },
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['faHeart']
      // },
      // {
      //   set: '@fortawesome/free-solid-svg-icons',
      //   icons: ['faShoppingCart']
      // },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      },
    ]
  },

  bootstrapVue: {
    icons: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
