import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.http
        .post('http://localhost:3000/products', this.productForm.value)
        .subscribe(() => {
          console.log('Product added successfully');
          this.productForm.reset();
        });
    }
  }
}
