export default function getMetaData(pageName, data) {
  const route = useRoute()
  return {
    title: `J.D. Hillen - ${pageName}`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#333333'},
      { name: 'theme-color', content: '#FFFFFF'},
      { name: 'description', content: data.description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'og:title', content: `J.D. Hillen - ${pageName}` },
      { name: 'og:description', content: data.description },
      { name: 'og:image', content: data.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'twitter:title', content: `J.D. Hillen - ${pageName}` },
      { name: 'twitter:description', content: data.description },
      { name: 'twitter:image', content: data.image }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/static/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/static/apple-touch-icon.png'},
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/static/favicon-32x32.png'},
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/static/favicon-16x16.png'},
      { rel: 'manifest', href: '/static/site.webmanifest'},
      { rel: 'mask-icon', color: '#333333', href: '/static/safari-pinned-tab.svg'},
    ]
  }
};




    