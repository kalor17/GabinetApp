import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { ReservationService } from '../_services/reservation.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { Reservation } from '../_models/reservation';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

@Component({
  selector: 'app-rezerwacje',
  templateUrl: './rezerwacje.component.html',
  styleUrls: ['./rezerwacje.component.css']
})
export class RezerwacjeComponent implements OnInit {
  reservations: Reservation[];
  calendarOptions: Options;
  uccCalendar: CalendarComponent;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private userService: UserService, private reservationsService: ReservationService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // this.loadReservations();
    // this.calendarOptions = {
    //   editable: false,
    //   eventLimit: false,
    //   header: {
    //     left: 'prev,next today',
    //     center: 'title',
    //     right: 'month,agendaWeek,agendaDay,listMonth'
    //   },
    //   events: this.reservations
    // };

    this.reservationsService.getReservationsList().subscribe(data => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        events: data
      };
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
