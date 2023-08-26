import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css'],
})
export class DemoFormComponent implements OnInit {
  FirstName = 'Akash';
  LastName = 'Das';

  constructor() {}

  ngOnInit(): void {}
}
