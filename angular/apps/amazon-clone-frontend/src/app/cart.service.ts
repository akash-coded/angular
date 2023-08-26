import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  constructor(private http: HttpClient) {}

  addToCart(product: any) {
    this.http
      .post<any[]>('http://localhost:3000/cart', product)
      .subscribe((updatedCart: any[]) => {
        this.cart.next(updatedCart);
      });
  }

  fetchCart() {
    this.http
      .get<any[]>('http://localhost:3000/cart')
      .subscribe((cart: any[]) => {
        this.cart.next(cart);
      });
  }
}
