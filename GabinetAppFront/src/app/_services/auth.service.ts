import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post(this.baseUrl + 'login', model)
  .pipe(
    map((response: any) => {
      const user = response;
      if (user) {
        localStorage.setItem('token', user.token);
        this.decodedToken = this.jwtHelper.decodeToken(user.token);
        console.log(this.decodedToken.unique_name, this.decodedToken.role, this.isDentist());
      }
    })
  );
}

register(user: User) {
  return this.http.post(this.baseUrl + 'register', user);
}

loggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

isDentist() {
  const token = localStorage.getItem('token');
  if (this.jwtHelper.isTokenExpired(token)) {
    return false;
  }
  if (this.decodedToken.role === 'dentist') {
    return true;
  }
  return false;
}

}
