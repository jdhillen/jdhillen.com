import gsap from 'gsap';
import { useTransitionComposable } from '../composables/pageTransitions';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition = {
  name: 'page-transition',
  mode: 'out-in',
  css: false,
  onEnter: (el, done) => {
    gsap.set(el, { opacity: 0 });
    gsap.to(el, {
      opacity: 1,
      duration: 0.25,
      ease: 'expo.in',
      onComplete: () => {
        toggleTransitionComplete(true);
        done();
      },
    });
  },
  onLeave: (el, done) => {
    toggleTransitionComplete(false);
    gsap.to(el, {
      opacity: 0,
      duration: 0.25,
      ease: 'expo.out',
      onComplete: () => {
        done();
      },
    });
  },
};

export default pageTransition;
