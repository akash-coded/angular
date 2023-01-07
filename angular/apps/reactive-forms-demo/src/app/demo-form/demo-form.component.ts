import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css'],
})
export class DemoFormComponent implements OnInit {
  Form = new FormControl('Angular Form');

  constructor() {}

  ngOnInit(): void {}

  setvalue() {
    this.Form.setValue('Angular Reactive Form');
  }

  resetvalue() {
    this.Form.setValue('Angular Form');
  }
}
