import { gsap } from 'gsap';
import { useTransitionComposable } from './transitionState';

const { toggleTransitionComplete } = useTransitionComposable();

const blurLevel = 10;

const pageTransition = {
  name: 'default-page-transiton',
  mode: 'out-in',
  appear: true,
  css: false,
  onEnter: (el, done) => {
    gsap.set(el, {
      autoAlpha: 0,
      "--myBlur": blurLevel,
    });
    gsap.to(el, {
      delay: 0.25,
      duration: 0.25,
      autoAlpha: 1,
      "--myBlur": 0,
      ease: "power2.out",
      onComplete: done
    });
  },
  onLeave: (el, done) => {
    toggleTransitionComplete(false);
    gsap.to(el, {
      duration: 0.25,
      autoAlpha: 0,
      "--myBlur": blurLevel,
      ease: "power2.in",
      onComplete: done
    });
  },
};

export default pageTransition;
