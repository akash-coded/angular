import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css'],
})
export class GreetComponent implements OnInit {
  name: string = 'Akash';

  constructor() {}

  ngOnInit(): void {}
}
