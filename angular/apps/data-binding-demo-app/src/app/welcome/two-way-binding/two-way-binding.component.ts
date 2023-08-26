import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css'],
})
export class TwoWayBindingComponent implements OnInit {
  public firstName: string = '';
  public lastName: string = '';
  public position: string = '';
  public salary: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
