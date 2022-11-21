export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    hljs.highlightAll();
  })
  nuxtApp.hook('page:transition:finish', () => {
    hljs.highlightAll();
  })
})