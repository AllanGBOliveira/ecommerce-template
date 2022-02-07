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
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicon/ms-icon-144x144.png' },
      { name: 'theme-color', content: '/#ffffff' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: "57x57", href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: "60x60", href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: "72x72", href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: "76x76", href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: "114x114", href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: "120x120", href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: "144x144", href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: "152x152", href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: "180x180", href: '/favicon/apple-icon-180x180.png' },
      { rel: 'icon', type: "image/png", sizes: "192x192", href: '/favicon/android-icon-192x192.png' },
      { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: "image/png", sizes: "96x96", href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', type: "image/png", href: '/favicon/manifest.json' }

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
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
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
