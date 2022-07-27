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

  constructor() {}

  ngOnInit(): void {}
}
