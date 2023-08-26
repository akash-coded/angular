import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css'],
})
export class BuiltInPipesComponent implements OnInit {
  name: string = 'aKaSh';
  today: number = Date.now();
  bankBalance: number = 0;
  percentage: number = 0.83;

  constructor() {}

  ngOnInit(): void {}
}
