export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'jdhillen.com',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#333333'},
      { name: 'theme-color', content: '#FFFFFF'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'},
      { rel: 'manifest', href: '/site.webmanifest'},
      { rel: 'mask-icon', color: '#333333', href: '/safari-pinned-tab.svg'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/vendor/_normalize.scss',
    '~/assets/scss/vendor/_skeleton.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: [
      '~/assets/scss/main.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.API_BASE,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
