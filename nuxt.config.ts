// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/vendor/_reset.scss',
    '@/assets/scss/vendor/_skeleton.scss'
  ],

  build: {
    transpile: ['gsap'],
  },

  modules: [
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
    '@nuxtjs/supabase',
  ],

  runtimeConfig: {
    public: {
      API_BASE: process.env.NUXT_PUBLIC_API_BASE,
      SITE_URL: process.env.NUXT_PUBLIC_SITE_URL
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['@/components']
  },

  app: {
    pageTransition: true,
    head: {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'msapplication-TileColor', content: '#333333' },
        { name: 'theme-color', content: '#FFFFFF' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'apple-touch-icon',
          type: 'image/png',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png'
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png'
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', color: '#333333', href: '/safari-pinned-tab.svg' },
        {
          rel: 'stylesheet',
          href: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/hybrid.min.css'
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: '//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js'
        }
      ]
    }
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/main.scss";'
        }
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  sitemap: {
    exclude: ['/style-guide']
  },

  gtag: {
    id: 'G-PEK3Y8LZW0'
  },

  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false,
    redirectOptions: {
      login: '/',
      callback: '/',
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    }
  },
});
