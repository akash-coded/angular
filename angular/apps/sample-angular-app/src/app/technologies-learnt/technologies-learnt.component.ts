import { Component } from '@angular/core';

@Component({
  selector: 'app-technologies-learnt',
  templateUrl: './technologies-learnt.component.html',
  styleUrls: ['./technologies-learnt.component.css'],
})
export class TechnologiesLearntComponent {
  technologies = [
    'HTML',
    'CSS',
    'Bootstrap',
    'JavaScript',
    'Advanced JavaScript',
    'TypeScript',
    'Framework Fundamentals',
    'Angular',
  ];
}
