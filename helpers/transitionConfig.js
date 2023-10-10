import { gsap } from 'gsap';

import { useTransitionComposable } from '../composables/transitions/pageTransition';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition = {
  name: 'page-transiton',
  mode: 'out-in',
  onEnter: (el, done) => {
    gsap.set(el, { autoAlpha: 0, scale: 0.75, y:'-50' });
    gsap.to(el, {
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      y: 0,
      ease: "power2.out",
      onComplete: done
    });
  },
  onLeave: (el, done) => {
    toggleTransitionComplete(false);
    gsap.to(el, {
      duration: 0.5,
      autoAlpha: 0,
      scale: 0.75,
      y:'-50',
      ease: "power2.in",
      onComplete: done
    });
  },
};

export default pageTransition;
