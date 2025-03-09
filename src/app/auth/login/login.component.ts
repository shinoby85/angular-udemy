import {afterNextRender, Component, DestroyRef, inject, viewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {debounceTime} from "rxjs";

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
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('save-login-form');

      if (savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const saveEmail = loadedFormData.email;
        setTimeout(() => {
          this.form().controls['email'].setValue(saveEmail);
        })
      }

      const subscription = this.form()
        .valueChanges?.pipe(
          debounceTime(500)
        )
        .subscribe((value) => {
          window.localStorage.setItem('save-login-form', JSON.stringify({email: value.email}));
        });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    })
  }

  onSubmit(formData: NgForm) {
    if (formData.form.invalid) {
      return;
    }

    const email = formData.form.value.email;
    const password = formData.form.value.password;
    console.log(email, password);
  }
}
