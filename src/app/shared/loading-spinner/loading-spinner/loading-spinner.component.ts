import {Component} from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: false,
  template: `
    <div class="spinner">
      <div class="spinner-container">
        <div></div>
      </div>
    </div>
  `,
  styleUrl: './loading-spinner.component.css'
})
export class LoadingSpinnerComponent {

}
