import { Component, OnInit } from '@angular/core';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user: User = {
    id: 1,
    name: 'Akash',
  };

  message: string = '';

  imageLink: string = '../../assets/img/lake.jpg';

  constructor() {}

  ngOnInit(): void {}

  onClickMe() {
    this.message = 'Welcome to angular programming...';
  }
}
