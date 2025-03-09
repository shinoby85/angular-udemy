import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return {doesNotContainQuestionMark: true}
}

let initialEmailValue = '';
const savedForm = window.localStorage.getItem("saved-login-form");
if (savedForm) {
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
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
export class LoginComponent implements OnInit {
  destroyRef = inject(DestroyRef);
  myForm = new FormGroup({
    email: new FormControl(initialEmailValue, {
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark],
    }),
  })

  ngOnInit(): void {
    const subscription = this.myForm.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      window.localStorage.setItem('saved-login-form', JSON.stringify(value));
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

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
