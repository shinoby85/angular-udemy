import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {animationsArray} from './app.animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: animationsArray
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
