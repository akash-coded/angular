import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-data-binding',
  templateUrl: './property-data-binding.component.html',
  styleUrls: ['./property-data-binding.component.css'],
})
export class PropertyDataBindingComponent implements OnInit {
  id: number = 1;
  name: string = 'Farhan Ahmed';
  gender: string = 'Male';
  designation: string = 'Software Developer';
  location: string = 'Bangalore';
  salary: number = 70000;
  imageHeight: number = 100;
  imageWidth: number = 140;
  imagePath: string = '../../../../assets/img/profile-pic.jpg';
  columnSpan: number = 4;

  constructor() {}

  ngOnInit(): void {}
}
