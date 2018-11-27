import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from '../_services/visit.service';
import { User } from '../_models/user';
import { Visit } from '../_models/Visit';

@Component({
  selector: 'app-wizyta-list',
  templateUrl: './wizyta-list.component.html',
  styleUrls: ['./wizyta-list.component.css']
})
export class WizytaListComponent implements OnInit {
  user: User;

  constructor(private userService: UserService, private visitService: VisitService, private alertify: AlertifyService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loadUser();
    this.loadVisits();
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  loadVisits() {
    this.visitService.getVisits(this.user.id).subscribe((visits: Visit[]) => {
      this.user.visits = visits;
    }, error => {
      this.alertify.error(error);
    });
  }

}
