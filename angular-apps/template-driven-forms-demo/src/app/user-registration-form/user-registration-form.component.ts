import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
  gender: string;
  paymentMode: string;
  notification: boolean;
}

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css'],
})
export class UserRegistrationFormComponent implements OnInit {
  user: User = {
    name: 'Akash Das',
    email: 'akash@xyz.com',
    gender: 'male',
    paymentMode: 'Monthly',
    notification: true,
  };

  constructor() {}

  ngOnInit(): void {}

  register(userRegForm: NgForm) {
    console.log(userRegForm.form.value);
  }
}
