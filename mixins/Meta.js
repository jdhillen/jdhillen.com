export default {
  head() {
    return {
      title: `J.D. Hillen - ${this.pageName}`,
      meta: [
        { name: 'description', content: this.data.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: `https://jdhillen.com${this.$route.fullPath}` },
        { name: 'og:title', content: `J.D. Hillen - ${this.pageName}` },
        { name: 'og:description', content: this.data.description },
        { name: 'og:image', content: this.data.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@jdhillen' },
        { name: 'twitter:creator', content: '@jdhillen' },
        { name: 'twitter:url', content: `https://jdhillen.com${this.$route.fullPath}` },
        { name: 'twitter:title', content: `J.D. Hillen - ${this.pageName}` },
        { name: 'twitter:description', content: this.data.description },
        { name: 'twitter:image', content: this.data.image }
      ]
    }
  }
}