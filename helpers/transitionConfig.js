import gsap from 'gsap';
import { useTransitionComposable } from '../composables/pageTransitions';

const { toggleTransitionComplete } = useTransitionComposable();

const blurLevel = 10;

const pageTransition = {
  name: 'page-transition',
  mode: 'out-in',
  appear: true,
  css: false,
  onEnter: (el, done) => {
    gsap.set(el, {
      opacity: 0,
      "--myBlur": blurLevel,
    });
    gsap.to(el, {
      opacity: 1,
      "--myBlur": 0,
      duration: 0.5,
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
      "--myBlur": blurLevel,
      duration: 0.5,
      ease: 'expo.out',
      onComplete: () => {
        done();
      },
    });
  },
};

export default pageTransition;
