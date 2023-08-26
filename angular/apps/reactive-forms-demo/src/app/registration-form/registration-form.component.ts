import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      paymentType: new FormControl(),
      notification: new FormControl(),
    });
  }

  ngOnInit(): void {}

  saveData() {
    console.log(this.userForm.value);
  }

  populateData() {
    this.userForm.setValue({
      name: 'Akash',
      email: 'akash@xyz.com',
      gender: 'male',
      paymentType: 'Yearly',
      notification: 'false',
    });
  }

  clearData() {
    this.userForm.setValue({
      name: new FormControl(),
      email: new FormControl(),
      gender: new FormControl(),
      paymentType: new FormControl(),
      notification: new FormControl(),
    });
  }
}
