import { trigger, state, transition, query, style, group, animate } from "@angular/animations";

export const slider =
  trigger('routeSlideAnimation', [
    transition(':increment', slideTo('right')),
    transition(':decrement', slideTo('left')),
  ]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'fixed',
        top: '43px', //the exact number to prevent outlets from shifting up/down when sliding
        [direction]: 0,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        //animate('600ms ease-in-out', style({ opacity:0} )),
        animate('600ms ease-in-out', style({ [direction]: '100%', opacity: 0 }))
      ], optional),
      query(':enter', [
        animate('600ms ease-in-out', style({ [direction]: '0%' }))
      ])
    ]),
  ];
}

export const open_close = trigger('routeFadingAnimation', [

  transition('* => 1', fadeIn()),
  transition('1 => *', fadeOut()),
]);

function fadeIn() {
  const optional = { optional: true };
  return [
    query(':enter',
      [
        style({
          position: 'fixed',
          'z-index': 200,
          top: '10%',
          opacity: 0,
          height: '75%',
        })
      ],
      { optional: true }
    ),
    query(':leave',
      [
        style({ opacity: 1, }),
      ],
      { optional: true }
    ),
    group([
      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0,  }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          animate('0.2s', style({
            position: 'relative',
            opacity: 1,
            height: '*',
          })
          )
        ],
        { optional: true }
      )
    ])


  ]
}
function fadeOut() {
  const optional = { optional: true };
  return [
    query(':enter',
      [
        style({
          position: 'relative',
          opacity: 0,
        })
      ],
      { optional: true }
    ),
    query(':leave',
      [
        style({
          position: 'absolute',
          opacity: 1,
          'z-index': 200,
          height: '*',
        }),
      ],
      { optional: true }
    ),
    group([
      query(':leave',
        [
          style({ 
            //outline: 'solid 20px red',
            position: 'absolute',
            opacity: 1, 
            height: '500px',
          }),
          animate('0.5s', style({ opacity: 0, height: 0 }))
        ],
        { optional: true }
      ),

      query(':enter',
        [
          animate('0.2s', style({
            opacity: 1,
          })
          )
        ],
        { optional: true }
      )
    ])


  ]
}


export const zoomInOut =
  trigger('routeZoomAnimation', [
    transition('work => photos', zoomIn('30%', '10%')),
    transition('photos => work', zoomOut('10%', '10%')),

    transition('work => videos', zoomIn('70%', '10%')),
    transition('videos => work', zoomOut('70%', '10%')),

    transition('work => coding', zoomIn('30%', 'bottom')),
    transition('coding => work', zoomOut('30%', 'bottom')),

    transition('work => it', zoomIn('70%', 'bottom')),
    transition('it => work', zoomOut('70%', 'bottom')),

    transition('photos => photo-details', zoomIn('center', '10%')),
    transition('photo-details => photos', zoomOut('center', '10%')),

    transition('work => photo-details', zoomIn('30%', '10%')),
    transition('photo-details => work', zoomOut('10%', '10%')),

  ]);

function zoomIn(originX?: any, originY?: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '43px', //the exact number to prevent outlets from shifting up/down when sliding
        transform: 'scale(1)',
        width: '100%',
        'transform-origin': originX + ' ' + originY
      })
    ], optional),
    query(':enter', [
      style({ top: '43px', 'transform-origin': originX + ' ' + originY, transform: 'scale(0.5)', opacity: 0 })
    ]),
    group([
      query(':leave', [
        //animate('600ms ease-in-out', style({ opacity:0} )),
        animate('300ms ease-in-out', style({ 'transform-origin': originX + ' ' + originY, transform: 'scale(1.5)', opacity: 0 }))
      ], optional),
      query(':enter', [
        animate('300ms ease-in-out', style({ 'transform-origin': originX + ' ' + originY, transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
  ];
}

function zoomOut(originX?: any, originY?: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: '43px', //the exact number to prevent outlets from shifting up/down when sliding
        transform: 'scale(1)',
        'transform-origin': originX + ' ' + originY,
        width: '100%',
      })
    ], optional),
    query(':enter', [
      style({ transform: 'scale(1.5)', 'transform-origin': originX + ' ' + originY, opacity: 0 })
    ]),
    group([
      query(':leave', [
        //animate('600ms ease-in-out', style({ opacity:0} )),
        animate('300ms ease-in-out', style({ 'transform-origin': originX + ' ' + originY, transform: 'scale(0.5)', opacity: 0 }))
      ], optional),
      query(':enter', [
        animate('300ms ease-in-out', style({ transform: 'scale(1)', opacity: 1 }))
      ])
    ]),
  ];
}

