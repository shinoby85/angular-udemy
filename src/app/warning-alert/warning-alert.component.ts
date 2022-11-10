import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>Something is not working right!</p>
    <app-messages></app-messages>
  `,
  styles: [`
    p {
      width: 70%;
      margin: 0 auto;
      padding: 20px;
      background-color: #ef9393;
      border: 2px solid darkred;
      -webkit-border-radius: 5px;-moz-border-radius: 5px;border-radius: 5px;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
