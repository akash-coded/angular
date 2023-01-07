import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css'],
})
export class StructuralDirectivesComponent implements OnInit {
  condition?: boolean;

  constructor() {}

  ngOnInit(): void {}

  getTrue() {
    this.condition = true;
  }
  getFalse() {
    this.condition = false;
  }
}
