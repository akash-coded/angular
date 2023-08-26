import { Component, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Akash',
  };

  @Output() saveRequest = new EventEmitter<Item>();

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onSave() {
    this.router.navigate(['/homepage']);
  }
}
