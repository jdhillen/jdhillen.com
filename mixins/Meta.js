export default {
  head() {
    return {
      title: `J.D. Hillen - ${this.pageName}`,
      meta: [
        { name: 'description', content: this.data.description },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: `${process.env.SITE_URL}${this.$route.fullPath}` },
        { name: 'og:title', content: `${process.env.SITE_NAME} - ${this.pageName}` },
        { name: 'og:description', content: this.data.description },
        { name: 'og:image', content: this.data.image },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: `${process.env.SITE_URL}${this.$route.fullPath}` },
        { name: 'twitter:title', content: `${process.env.SITE_NAME} - ${this.pageName}` },
        { name: 'twitter:description', content: this.data.description },
        { name: 'twitter:image', content: this.data.image }
      ]
    }
  }
}