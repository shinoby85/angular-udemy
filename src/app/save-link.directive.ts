import {Directive} from '@angular/core';

@Directive({
  selector: 'a[appSaveLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)'
  }
})
export class SaveLinkDirective {

  constructor() {
    console.log('SaveLinkDirective is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = window.confirm('Are you sure you want to leave?');
    if (wantsToLeave) {
      return;
    }
    event.preventDefault();
  }

}
