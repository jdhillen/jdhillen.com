import gsap from 'gsap';

// Create a simple reactive state for transition status
const transitionState = reactive({
  transitionComplete: false
});

// Toggle helper for transition state
const toggleTransitionComplete = (value) => {
  transitionState.transitionComplete = value;
};

export default defineNuxtPlugin((nuxtApp) => {
  // Define blur amount
  const blurLevel = 10;

  // Initialize transition state - do this immediately, not in onMounted
  toggleTransitionComplete(true);

  // Define reusable transition functions
  const onEnter = (el, done) => {
    gsap.set(el, {
      opacity: 0,
      '--myBlur': blurLevel
    });
    gsap.to(el, {
      opacity: 1,
      '--myBlur': 0,
      duration: 0.5,
      ease: 'expo.in',
      onComplete: () => {
        toggleTransitionComplete(true);
        done();
      }
    });
  };

  const onLeave = (el, done) => {
    toggleTransitionComplete(false);
    gsap.to(el, {
      opacity: 0,
      '--myBlur': blurLevel,
      duration: 0.5,
      ease: 'expo.out',
      onComplete: () => {
        done();
      }
    });
  };

  // Apply GSAP transitions to all pages globally
  nuxtApp.vueApp.directive('page-transition', {
    mounted(el) {
      // Set initial state for transitions
      gsap.set(el, {
        opacity: 1,
        '--myBlur': 0
      });
    }
  });

  // Override Nuxt's default page transitions with our GSAP ones
  nuxtApp.hook('page:transition', () => ({
    name: 'page-transition',
    mode: 'out-in',
    appear: true,
    css: false,
    onEnter,
    onLeave
  }));

  // Provide transition state to components
  nuxtApp.provide('transitionState', transitionState);
  nuxtApp.provide('toggleTransitionComplete', toggleTransitionComplete);
});
