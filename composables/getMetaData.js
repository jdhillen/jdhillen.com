export default function getMetaData(meta) {
  const route = useRoute()
  const obj = {
    title: `J.D. Hillen - ${meta.name}`,
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'description', content: meta.desc },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'og:title', content: `J.D. Hillen - ${meta.name}` },
      { name: 'og:description', content: meta.desc },
      { name: 'og:image', content: meta.img },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'twitter:title', content: `J.D. Hillen - ${meta.name}` },
      { name: 'twitter:description', content: meta.desc },
      { name: 'twitter:image', content: meta.img }
    ]
  };
  return obj;
};