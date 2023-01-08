import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css'],
})
export class FormReactiveComponent {
  reactiveForm!: FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      name: new FormControl('Akash', [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/superman/i),
      ]),
    });
  }

  get name() {
    return this.reactiveForm.get('name');
  }
}
