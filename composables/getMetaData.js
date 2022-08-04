export default function getMetaData(pageName, data) {
  const route = useRoute()
  const description = ref(data[0].description);
  const image = ref(data[0].image);
  return {
    title: `J.D. Hillen - ${pageName}`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'description', content: description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'og:title', content: `J.D. Hillen - ${pageName}` },
      { name: 'og:description', content: description },
      { name: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'twitter:title', content: `J.D. Hillen - ${pageName}` },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image }
    ]
  }
};




    