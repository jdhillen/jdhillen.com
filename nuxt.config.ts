import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/vendor/_normalize.scss',
    '@/assets/scss/vendor/_skeleton.scss'
  ],

  runtimeConfig: {
    public: {
      apiBase: ''
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['@/components'],
  },

  meta: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#333333'},
      { name: 'theme-color', content: '#FFFFFF'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/static/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon-16x16.png'},
      { rel: 'manifest', href: '/static/site.webmanifest'},
      { rel: 'mask-icon', color: '#333333', href: '/static/safari-pinned-tab.svg'},
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/hybrid.min.css' }
    ],
    script: [
      { type:'text/javascript', src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js' }
    ]
  },

  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/scss/main.scss";',
            },
        },
    },
  },
})
