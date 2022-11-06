import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `<p>Something is not working right!</p>
    <app-messages></app-messages>
  `,
  styles: [`
    p{
      color: darkred;
    }
  `]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
