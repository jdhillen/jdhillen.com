// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Keep flat directory structure (Nuxt 4 default is app/ directory)
  srcDir: '.',

  ssr: true,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/vendor/_reset.scss', '@/assets/scss/vendor/_skeleton.scss'],

  build: {
    transpile: ['gsap']
  },

  modules: [
    '@nuxtjs/mdc',
    '@nuxtjs/robots',
    '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
    'nuxt-gtag',
    '@nuxt/image'
  ],

  runtimeConfig: {
    public: {
      SITE_URL: process.env.SITE_URL
    }
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    global: true,
    dirs: ['@/components']
  },

  app: {
    // Using simple names that our plugin will override with GSAP
    pageTransition: {
      name: 'page-transition',
      mode: 'out-in'
    },
    layoutTransition: {
      name: 'layout-transition',
      mode: 'out-in'
    },
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
          sizes: '48x48',
          href: '/favicon.ico'
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          sizes: 'any',
          href: '/favicon.svg'
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
          additionalData: `@use "@/assets/scss/main.scss" as *;`
        }
      }
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/rss.xml']
    }
  },

  sitemap: {
    exclude: ['/style-guide']
  },

  gtag: {
    id: process.env.GA_TAG
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
      cookieRedirect: false
    }
  },

  mdc: {
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false
      }
    }
  },

  compatibilityDate: '2025-01-22'
});
