export default function getMetaData(route, meta) {
  const obj = {
    title: `${meta.title} - J.D. Hillen`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'title', content: `${meta.title} - J.D. Hillen` },
      { name: 'description', content: meta.desc },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'og:title', content: `${meta.title} - J.D. Hillen` },
      { name: 'og:description', content: meta.desc },
      { name: 'og:image', content: meta.img },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'twitter:title', content: `${meta.title} - J.D. Hillen` },
      { name: 'twitter:description', content: meta.desc },
      { name: 'twitter:image', content: meta.img }
    ]
  };
  return obj;
}
