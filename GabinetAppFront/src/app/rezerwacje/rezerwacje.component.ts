import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../_models/reservation';

@Component({
  selector: 'app-rezerwacje',
  templateUrl: './rezerwacje.component.html',
  styleUrls: ['./rezerwacje.component.css']
})
export class RezerwacjeComponent implements OnInit {
  user: User;
  reservations: Reservation[];

  constructor(private userService: UserService, private reservationsService: ReservationService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadUser();
    this.loadReservations();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadReservations() {
    this.reservationsService.getReservationsList().subscribe((reservations: Reservation[]) => {
      this.reservations = reservations;
    }, error => {
      this.alertify.error(error);
    });
  }


}
