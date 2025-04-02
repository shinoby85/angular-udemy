import {Component, inject} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService, IAuthResponseData} from './auth.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  standalone: false
})
export class AuthComponent {
  public isLoginMode = true;
  public isLoading = false;
  public error?: string;
  private _authService = inject(AuthService);
  private _router = inject(Router);

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    let authObs$: Observable<IAuthResponseData>;
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      authObs$ = this._authService.login(email, password);
    } else {
      authObs$ = this._authService.signUp(email, password);
    }

    authObs$.subscribe({
      next: (respData) => {
        console.log(respData);
        this.isLoading = false;
        this._router.navigate(['/recipes']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
        console.log(errorMessage);
      }
    });

    form.reset();
  }
}
