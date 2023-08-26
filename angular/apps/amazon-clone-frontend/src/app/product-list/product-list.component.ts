import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any = [];
  // cart: any[] = [];

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.http
      .get<any[]>('http://localhost:3000/products')
      .subscribe((products) => {
        this.products = products;
      });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
