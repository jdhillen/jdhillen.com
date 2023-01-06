import VueGtag from 'vue-gtag';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: 'UA-4521767-2'
      }
    },
    nuxtApp.$router
  );
});
