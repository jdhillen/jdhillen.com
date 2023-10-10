import { gsap } from 'gsap';

import { useTransitionComposable } from './transitionState';

const { toggleTransitionComplete } = useTransitionComposable();

const pageTransition = {
  name: 'default-page-transiton',
  mode: 'out-in',
  onEnter: (el, done) => {
    gsap.set(el, {
      autoAlpha: 0,
      "--myBlur": 10,
      x:-50
    });

    console.log(el);
    
    gsap.to(el, {
      delay: 0.25,
      duration: 0.25,
      autoAlpha: 1,
      x: 0,
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
      x:50,
      "--myBlur": 10,
      ease: "power2.in",
      onComplete: done
    });
  },
};

export default pageTransition;
