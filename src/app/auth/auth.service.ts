import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';

const FIREBASE_API_KEY = 'AIzaSyBYc6aiUBH00e6qrVw4TxwjFT2Ajk0d0a4';

export interface IAuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  signUp(email: string, password: string) {
    return this.http.post<IAuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`, {
      email,
      password,
      returnSecureToken: true
    })
      .pipe(
        catchError(err => {
          let errorMessage = 'An unknown error occurred!';
          if (!err.error || !err.error.error) {
            return throwError(() => new Error(errorMessage));
          }
          switch (err.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'The email address is already in use by another account.';
              break;
            case 'OPERATION_NOT_ALLOWED':
              errorMessage = 'Password sign-in is disabled for this project';
              break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
              errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
              break;
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
