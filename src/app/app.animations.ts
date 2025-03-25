import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

export const animationsArray = [
  trigger('divState', [
    state('normal', style({
      'background-color': 'red',
      transform: 'translateX(0)'
    })),
    state('highlight', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px)'
    })),
    transition('normal <=> highlight', animate(300)),
    // transition('highlight => normal', animate(800)),
  ]),
  trigger('shrunkState', [
    state('normal', style({
      'background-color': 'red',
      transform: 'translateX(0) scale(1)'
    })),
    state('highlight', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px) scale(1)'
    })),
    state('shrunken', style({
      backgroundColor: 'blue',
      transform: 'translateX(100px) scale(0.5)'
    })),
    transition('normal => highlight', animate(300)),
    transition('highlight => normal', animate(800)),
    transition('shrunken <=> *', [
      animate(300, style({backgroundColor: 'orange'})),
      animate(1000, style({
        borderRadius: '50px'
      })),
      animate(500)
    ]),
  ]),
  trigger('list1', [
    state('on', style({
      opacity: '1',
      transform: 'translateX(0)',
    })),
    transition('void => *', [
      style({
        opacity: '0',
        transform: 'translateX(-100px)',
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({
        opacity: '0',
        transform: 'translateX(100px)',
      }))
    ]),
  ]),
  trigger('list1', [
    state('on', style({
      opacity: '1',
      transform: 'translateX(0)',
    })),
    transition('void => *', [
      style({
        opacity: '0',
        transform: 'translateX(-100px)',
      }),
      animate(300)
    ]),
    transition('* => void', [
      animate(300, style({
        opacity: '0',
        transform: 'translateX(100px)',
      }))
    ]),
  ]),
  trigger('list2', [
    state('on', style({
      opacity: '1',
      transform: 'translateX(0)',
    })),
    transition('void => *', [
      animate(1000, keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
          offset: 0
        }),
        style({
          opacity: 0.5,
          transform: 'translateX(-50px)',
          offset: 0.3
        }),
        style({
          opacity: 1,
          transform: 'translateX(-20px)',
          offset: 0.8
        }),
        style({
          opacity: 1,
          transform: 'translateX(0)',
          offset: 1
        }),
      ]))
    ]),
    transition('* => void', [
      group([
        animate(300, style({
          color: 'red',
        })),
        animate(300, style({
          opacity: '0',
          transform: 'translateX(100px)',
        }))
      ]),
    ]),
  ])
]
