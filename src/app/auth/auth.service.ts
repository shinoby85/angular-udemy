import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

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
    });
  }
}
