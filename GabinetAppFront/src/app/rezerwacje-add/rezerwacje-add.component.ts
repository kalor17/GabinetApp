import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Reservation } from '../_models/reservation';
import * as moment from 'moment';
import 'moment/locale/pl';


@Component({
  selector: 'app-rezerwacje-add',
  templateUrl: './rezerwacje-add.component.html',
  styleUrls: ['./rezerwacje-add.component.css']
})
export class RezerwacjeAddComponent implements OnInit {
  user: User;
  model: any = {};

  constructor(private userService: UserService, private reservationsService: ReservationService, private alertify: AlertifyService,
    private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
    moment.locale('pl');
  }

  loadUser() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  reservationAdd() {
      this.reservationsService.addReservation(this.user.id, this.model).subscribe(() => {
        this.alertify.success('Zarezerwowano wizytę');
      }, error => {
        this.alertify.error(error);
      });
  }

  isDentist() {
    return this.authService.isDentist();
  }

}
