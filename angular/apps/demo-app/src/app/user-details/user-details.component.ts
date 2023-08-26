import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  user: User = {
    id: 5,
    firstName: 'Akash',
    lastName: 'Das',
    salary: 1000,
  };

  constructor() {}

  ngOnInit(): void {}
}
