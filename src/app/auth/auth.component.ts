import {Component, inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: false
})
export class AuthComponent {
  public isLoginMode = true;
  public isLoading = false;
  private _authService = inject(AuthService);

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {

    } else {
      this._authService.signUp(email, password).subscribe({
        next: (respData) => {
          console.log(respData);
          this.isLoading = false;
        },
        error: (err) => {
          this.isLoading = false;
          console.log(err);
        }
      });
    }


    form.reset();
  }
}
