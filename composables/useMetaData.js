const getMetaData = (route, meta) => {
  const siteUrl = import.meta.env.NUXT_PUBLIC_SITE_URL || '';
  
  const obj = {
    title: `${meta.meta_title} - J.D. Hillen`,
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { name: 'title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'description', content: meta.meta_description },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: `${siteUrl}${route.fullPath}` },
      { name: 'og:title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'og:description', content: meta.meta_description },
      { name: 'og:image', content: meta.meta_image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `${siteUrl}${route.fullPath}` },
      { name: 'twitter:title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'twitter:description', content: meta.meta_description },
      { name: 'twitter:image', content: meta.meta_image }
    ]
  };
  return obj;
};

export default getMetaData;