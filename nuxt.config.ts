import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
    '@/assets/scss/vendor/_normalize.scss',
    '@/assets/scss/vendor/_skeleton.scss'
  ],

  runtimeConfig: {
    apiBase: '',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['@/components'],
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
