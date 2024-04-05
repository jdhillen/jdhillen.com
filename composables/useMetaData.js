const getMetaData = (route, meta) => {
  const obj = {
    title: `${meta.meta_title} - J.D. Hillen`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'description', content: meta.meta_description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'og:title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'og:description', content: meta.meta_description },
      { name: 'og:image', content: meta.meta_image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `https://jdhillen.com${route.fullPath}` },
      { name: 'twitter:title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'twitter:description', content: meta.meta_description },
      { name: 'twitter:image', content: meta.meta_image }
    ]
  };
  return obj;
};

export default getMetaData;