import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasek',
  templateUrl: './pasek.component.html',
  styleUrls: ['./pasek.component.css']
})
export class PasekComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logowanie udane');
    }, error => {
      this.alertify.error(error);
    }, () => {
      this.router.navigate(['/reservation']);
    });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Wylogowano');
    this.router.navigate(['/home']);
  }

}
