import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return {doesNotContainQuestionMark: true}
}

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [
    ReactiveFormsModule
  ]
})
export class LoginComponent {
  myForm = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  })

  controlIsInvalid(controlName: 'email' | 'password'): boolean {
    return this.myForm.controls[controlName].touched &&
      this.myForm.controls[controlName].dirty &&
      this.myForm.controls[controlName].invalid;
  }

  onSubmit() {
    console.log(this.myForm);
    const enteredEmail = this.myForm.value.email;
    const enteredPassword = this.myForm.value.password;
    console.log(enteredEmail, enteredPassword);
  }
}
