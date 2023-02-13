import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup = (email: string, password: string) => {
    return this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDWQQczCIqRxrK2EUbp-2OAz7M0OgL0TJY',
      {
        email: email,
        password: password,
        returnSecureToken: true
      })
  }

  login = (email: string, password: string): Observable<object> => {
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDWQQczCIqRxrK2EUbp-2OAz7M0OgL0TJY',
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
