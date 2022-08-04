export default function getMetaData(pageName, data) {
  const route = useRoute()
  return {
    title: `J.D. Hillen - ${pageName}`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
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
    ]
  }
};




    