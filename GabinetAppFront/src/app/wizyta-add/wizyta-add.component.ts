import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../_services/user.service';
import { VisitService } from '../_services/visit.service';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../_models/user';
import { Visit } from '../_models/Visit';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-wizyta-add',
  templateUrl: './wizyta-add.component.html',
  styleUrls: ['./wizyta-add.component.css']
})
export class WizytaAddComponent implements OnInit {
  visit: Visit;
  user: User;
  addForm: FormGroup;
  selectedTooth: any ;
  teeth: any = [18, 17, 16, 15, 14, 13, 12 , 11, 21 , 22, 23, 24, 25, 26, 27, 28];
  teeth2: any = [38, 37, 36, 35, 34, 33, 32 , 31, 41 , 42, 43, 44, 45, 46, 47, 48];

  constructor(private userService: UserService, private visitService: VisitService, private alertify: AlertifyService,
    private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loadUser();
    this.createAddForm();
  }

  radioChangeHandler(event: any) {
    this.selectedTooth = event.target.value;
  }

  createAddForm() {
    this.addForm = this.fb.group({
      // tooth: ['', [Validators.required, Validators.min(11), Validators.max(48)]],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  loadUser() {
    this.userService.getUser(+this.route.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });
  }

  addVisit() {
    this.visit = Object.assign({}, this.addForm.value);
    this.visit.tooth = this.selectedTooth;
    this.visitService.addVisit(this.user.id, this.visit).subscribe(() => {
      this.alertify.success('Dodano wizytę');
      this.addForm.reset();
    }, error => {
      this.alertify.error(error);
    });
  }

}
