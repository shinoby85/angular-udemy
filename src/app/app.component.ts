import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public toggleButton = false;
  public counterArray: string[] = [];
  public counter = 0;

  changeParagraphStyle() {
    this.toggleButton=!this.toggleButton;
    this.counter++;
    const date = new Date();
    this.counterArray.push(date.toString())
  }
}
