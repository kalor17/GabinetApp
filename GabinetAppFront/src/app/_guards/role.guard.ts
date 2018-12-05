import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private alertify: AlertifyService) {}
  canActivate(): boolean {
    if (this.authService.isDentist()) {
      return true;
    }
    this.alertify.error('Nie masz uprawnień aby tu wejść');
    this.router.navigate(['/home']);
    return false;
  }
}
