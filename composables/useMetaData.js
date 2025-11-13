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
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}${route.fullPath}` },
      { property: 'og:title', content: `${meta.meta_title} - J.D. Hillen` },
      { property: 'og:description', content: meta.meta_description },
      { property: 'og:image', content: meta.meta_image },
      { property: 'og:site_name', content: 'J.D. Hillen' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@jdhillen' },
      { name: 'twitter:creator', content: '@jdhillen' },
      { name: 'twitter:url', content: `${siteUrl}${route.fullPath}` },
      { name: 'twitter:title', content: `${meta.meta_title} - J.D. Hillen` },
      { name: 'twitter:description', content: meta.meta_description },
      { name: 'twitter:image', content: meta.meta_image }
    ],
    link: [
      { rel: 'canonical', href: `${siteUrl}${route.fullPath}` }
    ]
  };
  return obj;
};

export default getMetaData;
