import {
  animate,
  animateChild,
  animation,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export let RevealAnimation = animation(
  [
    style({ opacity: 0, transform: 'translate({{offsetX}},{{offsetY}})' }),
    animate('{{speed}} {{delay}} ease-out'),
  ],
  {
    params: { speed: '350ms', delay: '0ms', offsetY: '0px', offsetX: '0px' },
  }
);

export const reveal = trigger('reveal', [
  state('*', style({ opacity: 1 })),
  transition(':enter', useAnimation(RevealAnimation)),
]);
