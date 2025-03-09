import {Component} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    FormsModule
  ]
})
export class LoginComponent {
  // @ViewChild('form') form?: NgForm;

  onSubmit(formData: NgForm) {
    console.log(formData);
  }
}
