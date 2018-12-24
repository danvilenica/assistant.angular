import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../services/alert.service';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  onRegister(form: NgForm) {
    this.submitted = true;

    // stop here if form is invalid
    if (form.invalid) {
      return;
    }

    const user = new User();

    user.firstName = form.value.firstName;
    user.lastName = form.value.lastName;
    user.username = form.value.username;
    user.password = form.value.password;

    this.loading = true;
    this.userService
      .register(user)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['/login']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}
