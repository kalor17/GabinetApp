import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../_services/auth.service';
import { Reservation } from '../_models/reservation';

@Component({
  selector: 'app-rezerwacje-user',
  templateUrl: './rezerwacje-user.component.html',
  styleUrls: ['./rezerwacje-user.component.css']
})
export class RezerwacjeUserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private reservationsService: ReservationService, private alertify: AlertifyService,
    private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
    this.loadReservations();
  }

  loadUser() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadReservations() {
    this.reservationsService.getUserReservations(this.user.id).subscribe((reservations: Reservation[]) => {
      this.user.reservations = reservations;
    }, error => {
      this.alertify.error(error);
    });
  }

}
