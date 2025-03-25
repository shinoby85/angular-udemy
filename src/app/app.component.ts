import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {trigger, state, style, transition, animate} from '@angular/animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
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
        animate(300,style({backgroundColor: 'orange'})),
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
        animate(300,style({
          opacity: '0',
          transform: 'translateX(100px)',
        }))
      ]),
    ])
  ]
})
export class AppComponent {
  public state = 'normal';
  public shrunkState = 'normal';
  public list = ['Milk', 'Sugar', 'Bread'];

  onAdd(item: string) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list=this.list.filter(i=> i !== item);
  }

  onAnimate() {
    this.state = this.state === 'normal' ? 'highlight' : 'normal';
    this.shrunkState = this.state === 'normal' ? 'highlight' : 'normal';
  }

  onShrunk() {
    this.shrunkState = 'shrunken';
  }
}
