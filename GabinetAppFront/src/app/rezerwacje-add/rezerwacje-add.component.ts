import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Reservation } from '../_models/reservation';

@Component({
  selector: 'app-rezerwacje-add',
  templateUrl: './rezerwacje-add.component.html',
  styleUrls: ['./rezerwacje-add.component.css']
})
export class RezerwacjeAddComponent implements OnInit {
  start: Date = null;
  name: string = null;
  user: User;
  reservation: Reservation;
  reservationForm: FormGroup;
  model: any = {};

  constructor(private userService: UserService, private reservationsService: ReservationService, private alertify: AlertifyService,
    private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loadUser();
  }

  loadUser() {
    this.userService.getUser(this.authService.decodedToken.nameid).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  createReservationForm() {
    this.reservationForm = this.fb.group({
      start: [this.start, Validators.required],
      name: ['', Validators.required],
    });
  }

  reservationAdd() {
      console.log(this.model);
      // this.reservation.name = this.model.name;
      // this.reservation.start = this.model.start;
      this.reservationsService.addReservation(this.user.id, this.model).subscribe(() => {
        this.alertify.success('Zarezerwowano wizytę');
      }, error => {
        this.alertify.error(error);
      });
}

}
