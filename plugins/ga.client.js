export default defineNuxtPlugin(() => {
  // Create gtag function & define gtag deps (window.dataLayer array)
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());

  // Config with gtagId & send initial page view
  gtag('config', 'UA-4521767-2', { send_page_view: true });

  // Inject gtag function
  return { provide: { gtag } };
});
