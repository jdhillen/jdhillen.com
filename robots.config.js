export default [
  { UserAgent: '*' },
  { Disallow: '/admin/' },
  { Disallow: '/_nuxt/' },
  { Disallow: '/.nuxt/' },
  { Disallow: '/style-guide/' },
  { BlankLine: true },
  { Comment: 'Robots will rise up and KILL US ALL!' },
  { Sitemap: () => `${process.env.NUXT_PUBLIC_SITE_URL}/sitemap.xml` }
];
