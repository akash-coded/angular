import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-form-template',
  templateUrl: './hero-form-template.component.html',
  styleUrls: ['./hero-form-template.component.css'],
})
export class HeroFormTemplateComponent {

  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/