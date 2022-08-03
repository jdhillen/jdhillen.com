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
