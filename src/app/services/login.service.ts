import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient ) { }

  login( name: string, password: string ) {
    // return this.httpClient.post( 'http://localhost:3000/login', { name, password } );
    return this.httpClient.post<LoginResponse>("/login", { name, password }).pipe(
      // tap( response => console.log(response) )
      tap((value) => {
        sessionStorage.setItem('token', value.token);
        sessionStorage.setItem('user', JSON.stringify(value.user));
      })
    );
  }
}
