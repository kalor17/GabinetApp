import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { NgForm } from '@angular/forms';
import { Visit } from '../_models/Visit';

@Component({
  selector: 'app-uzytkownik-edycja',
  templateUrl: './uzytkownik-edycja.component.html',
  styleUrls: ['./uzytkownik-edycja.component.css']
})
export class UzytkownikEdycjaComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  user: User;

  constructor(private userService: UserService, private alertify: AlertifyService, private route: ActivatedRoute,
    private authService: AuthService) { }

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

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user).subscribe(next => {
      this.alertify.success('Profil zaktualizowany');
      this.editForm.reset(this.user);
    }, error => {
      this.alertify.error(error);
    });
  }

}
