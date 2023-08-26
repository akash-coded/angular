import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent implements OnInit {
  employees = ['Farhan Akhtar', 'Saif Ali Khan'];

  constructor() {}

  ngOnInit(): void {}

  addEmployee(newEmployee: string) {
    if (newEmployee) {
      this.employees.push(newEmployee);
    }
  }
}
